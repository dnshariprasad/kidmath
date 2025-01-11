import React from "react";
import styled from "styled-components";

interface ButtonProps {
  title: string; // Title of the button
  isActive: boolean; //class
  onClick: () => void; // Click event handler
}

const Button = styled.button`
  background-color: #a35c7a;
  color: #fbf5e5;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c890a7;
  }
`;

const KidButton: React.FC<ButtonProps> = ({ title, isActive, onClick }) => {
  return (
    <Button
      className={isActive ? "btn btn-primary" : "btn btn-secondary"}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
export default KidButton;
