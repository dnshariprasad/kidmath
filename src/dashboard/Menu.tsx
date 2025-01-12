import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MAIN_MENU } from "../util/Constants";

const MenuContainer = styled.div`
  width: 250px;
  background-color: #fbf5e5;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;

const MenuSection = styled.div`
  margin-bottom: 10px;
`;

const MenuHeading = styled.div`
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  background-color: #a35c7a;
  border-radius: 4px;
  @media (max-width: 768px) {
    background-color: #a35c7a;
    border-radius: 0;
    border-bottom: none;
  }
`;

const MenuList = styled.ul<{ isVisible: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  color: #ffffff;
  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

const MenuItem = styled.li`
  padding: 8px;
  background-color: #c890a7;
  border-radius: 4px;
  margin-top: 5px;

  cursor: pointer;

  &:hover {
    color: #eee;
  }
`;

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <MenuContainer>
      {/* Dynamically create the menu based on MAIN_MENU */}
      {MAIN_MENU.map((menu, index) => (
        <MenuSection key={index}>
          <MenuHeading onClick={() => toggleSection(`section${index}`)}>
            {menu.main}
          </MenuHeading>
          <MenuList isVisible={expandedSections[`section${index}`]}>
            {menu.sub.map((item, subIndex) => (
              <MenuItem key={subIndex} onClick={() => navigate(item.path)}>
                {item.title}
              </MenuItem>
            ))}
          </MenuList>
        </MenuSection>
      ))}
    </MenuContainer>
  );
};

export default Menu;
