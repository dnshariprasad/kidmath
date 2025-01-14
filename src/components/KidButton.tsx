import React from "react";
import styled from "styled-components";

interface ButtonProps {
  title: string; // Title of the button
  isActive: boolean; //class
  onClick: () => void; // Click event handler
}

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 18px;
  color: white;
  background-color: ${(props) => props.theme.colors.main};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const KidButton: React.FC<ButtonProps> = ({
  title,
  onClick,
  isActive = true,
}) => {
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
