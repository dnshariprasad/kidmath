import React from "react";
import styled from "styled-components";

interface ButtonProps {
  title: string; // Title of the button
  isActive: boolean; //class
  onClick: () => void; // Click event handler
}

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.nav};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme.colors.sub};
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
