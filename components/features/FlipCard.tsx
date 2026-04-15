import React from "react";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  direction?: "v" | "h";
  className?: string;
  frontClassName?: string;
  backClassName?: string;
}

export default function FlipCard({
  frontContent,
  backContent,
  direction = "v",
  className = "",
  frontClassName = "",
  backClassName = "",
}: FlipCardProps) {
  const innerClass = direction === "v" ? "flip-card-v" : "flip-card-h";

  return (
    <div className={`flip-card-container ${className}`}>
      <div className={innerClass}>
        <div className={`flip-card-front ${frontClassName}`}>
          {frontContent}
        </div>
        <div className={`flip-card-back ${backClassName}`}>
          {backContent}
        </div>
      </div>
    </div>
  );
}
