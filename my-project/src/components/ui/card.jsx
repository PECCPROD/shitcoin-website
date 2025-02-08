import React from "react";

export const Card = ({ children, className }) => {
  return <div className={`bg-gray-800 p-6 rounded-2xl ${className}`}>{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div className="text-center">{children}</div>;
};
