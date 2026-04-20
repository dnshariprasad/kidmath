import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MAIN_MENU } from "../../store/data/Constants";
import {
  MenuContainer,
  MenuHeading,
  MenuItem,
  MenuList,
  MenuSection,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { closeMobileMenu } from "../../store/slice/AlphabetSlice";
import * as LucideIcons from "lucide-react";

const MainMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state: RootState) => state.alphabet.isMobileMenuOpen);
  
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({ section0: true, section1: true, section2: true });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleItemClick = (path: string) => {
    navigate(path);
    dispatch(closeMobileMenu());
  };

  // Helper to render Lucide icons by name
  const renderIcon = (iconName: string, color: string, isActive: boolean) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return null;
    return <IconComponent size={22} color={isActive ? "white" : color} strokeWidth={2.5} />;
  };

  return (
    <MenuContainer data-testid="layout-sidebar" $isOpen={isMobileMenuOpen}>
      {MAIN_MENU.filter((menu) => menu.isEnabled).map((menu, index) => {
        const sectionId = `section${index}`;
        const isExpanded = expandedSections[sectionId];
        const hasActiveSub = menu.sub.some(item => location.pathname === item.path);

        return (
          <MenuSection key={index}>
            <MenuHeading 
              onClick={() => toggleSection(sectionId)}
              $isActive={hasActiveSub}
              $color={menu.color}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="icon-wrapper">
                  {renderIcon(menu.iconName, menu.color, hasActiveSub)}
                </span>
                <span className="title-wrapper">{menu.main}</span>
              </div>
              <span className="arrow" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
                ▼
              </span>
            </MenuHeading>
            <MenuList isVisible={isExpanded}>
              {menu.sub
                .filter((subItem) => subItem.isEnabled)
                .map((item, subIndex) => (
                  <MenuItem 
                    key={subIndex} 
                    onClick={() => handleItemClick(item.path)}
                    $active={location.pathname === item.path}
                    $color={menu.color}
                  >
                    {item.title}
                  </MenuItem>
                ))}
            </MenuList>
          </MenuSection>
        );
      })}
    </MenuContainer>
  );
};

export default MainMenu;
