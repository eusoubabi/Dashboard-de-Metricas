// frontend/components/design/Title.tsx
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className = "" }: TitleProps) => (
  <h2 className={`mb-4 font-bold text-lg text-[#ffffff] ${className}`}>
    {children}
  </h2>
);

export default Title;