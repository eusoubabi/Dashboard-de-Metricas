// frontend/components/design/Section.tsx
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => (
  <div className={`space-y-4 ${className}`}>
    {children}
  </div>
);

export default Section;
