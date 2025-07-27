import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div 
    className={`bg-[rgba(32,33,75,0.53)] rounded-3xl p-6 shadow-md ${className}`}>
    {children}
  </div>
);

export default Card;
