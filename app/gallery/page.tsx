// ─────────────────────────────────────────────────────────────────────────────
// Gallery Page — assembles all sections
// ─────────────────────────────────────────────────────────────────────────────
import { GalleryHeroSection, GalleryCTASection, GalleryVideoSection } from "@/components/sections/gallery/GalleryStaticSections";
import GalleryGridSection from "@/components/sections/gallery/GalleryGridSection";

export default function GalleryPage() {
  return (
    <main>
      <GalleryHeroSection />
      <GalleryGridSection />
      <GalleryCTASection />
      <GalleryVideoSection />
    </main>
  );
}
