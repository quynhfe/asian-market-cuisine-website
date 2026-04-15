import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "filter";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/5",
    filter: "bg-surface-container-low text-on-surface-variant",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
