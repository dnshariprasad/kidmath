import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MAIN_MENU } from "../../util/Constants";
import {
  MenuContainer,
  MenuHeading,
  MenuItem,
  MenuList,
  MenuSection,
} from "./styles";

const MainMenu: React.FC = () => {
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

export default MainMenu;
