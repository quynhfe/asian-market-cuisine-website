import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Headline({ children, className = "", as: Component = "h2" }: TypographyProps) {
  return (
    <Component className={`font-headline italic text-primary ${className}`}>
      {children}
    </Component>
  );
}

export function Label({ children, className = "", as: Component = "span" }: TypographyProps) {
  return (
    <Component className={`font-label uppercase tracking-[0.2em] text-xs text-secondary ${className}`}>
      {children}
    </Component>
  );
}

export function Body({ children, className = "", as: Component = "p" }: TypographyProps) {
  return (
    <Component className={`font-body text-on-surface-variant leading-relaxed ${className}`}>
      {children}
    </Component>
  );
}
