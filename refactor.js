const fs = require('fs');

function getFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const p = dir + '/' + file;
    if (fs.statSync(p).isDirectory()) getFiles(p, files);
    else if (p.endsWith('.tsx') || p.endsWith('.ts')) files.push(p);
  });
  return files;
}

const files = [...getFiles('./components'), ...getFiles('./constants'), ...getFiles('./app')];
files.forEach(f => {
  let text = fs.readFileSync(f, 'utf8');
  let changed = false;
  
  if (text.includes('<img')) {
      text = text.replace(/<img/g, '<Image');
      if (!text.includes('import Image')) {
          // Insert after the first import or at top
          if (text.includes('import ')) {
             text = text.replace(/(import .*?;?\n)/, '$1import Image from "next/image";\n');
          } else {
             text = 'import Image from "next/image";\n' + text;
          }
      }
      changed = true;
  }
  
  // Replace .src usages that we added
  if (f.includes('data.ts') || f.includes('components')) {
      if (text.includes('IMAGES.') && text.includes('.src')) {
          text = text.replace(/(IMAGES\.[a-zA-Z0-9]+)\.src/g, '$1');
          changed = true;
      }
      if (text.includes('DISHES[') && text.includes('.src')) {
          text = text.replace(/(DISHES\[.*?\].image)\.src/g, '$1');
          changed = true;
      }
      if (text.includes('item.src') && f.includes('GalleryGridSection')) { 
          // Careful! For generic item.src inside map, if item.src is string it's fine.
          // BUT wait, item.src from constants/data is now StaticImageData! 
          // So <Image src={item.src} works correctly in Next 13! It accepts StaticImageData.
      }
      if (text.includes('p.src') && f.includes('StoryStaticSections')) {
          // p.src is StaticImageData
      }
  }

  // Find remaining .src if any relevant ones
  
  if (changed) {
     fs.writeFileSync(f, text);
     console.log('Updated ' + f);
  }
});
