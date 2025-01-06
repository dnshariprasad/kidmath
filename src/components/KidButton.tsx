import React from "react";

interface ButtonProps {
  title: string; // Title of the button
  isActive: boolean; //class
  onClick: () => void; // Click event handler
}

const KidButton: React.FC<ButtonProps> = ({ title, isActive, onClick }) => {
  return (
    <button
      className={isActive ? "btn btn-primary" : "btn btn-secondary"}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default KidButton;
