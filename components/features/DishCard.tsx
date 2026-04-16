import React from "react";
import Image from "next/image";

interface DishCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isNew?: boolean;
  isSignature?: boolean;
  category?: string;
  className?: string;
  imageClassName?: string;
}

export default function DishCard({
  title,
  description,
  imageUrl,
  isNew = false,
  isSignature = false,
  category,
  className = "",
  imageClassName = "aspect-[4/5] md:aspect-[16/10]"
}: DishCardProps) {
  return (
    <div className={`group ${className}`}>
      <div className={`relative overflow-hidden arched-image bg-surface-container-low mb-6 ${imageClassName}`}>
        <Image 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src={imageUrl} 
        />
        {isSignature && (
          <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full font-label text-[10px] uppercase tracking-widest">
            Signature
          </div>
        )}
      </div>
      
      {category && (
        <span className="font-label uppercase tracking-[0.2em] text-[10px] text-tertiary mb-2 block">
          {category}
        </span>
      )}
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-headline italic text-2xl md:text-3xl mb-2">{title}</h3>
          <p className="text-on-surface-variant text-sm max-w-sm">{description}</p>
        </div>
        
        {isNew && (
          <span className="font-label text-xs tracking-widest text-secondary mt-2">
            NEW
          </span>
        )}
      </div>
    </div>
  );
}
