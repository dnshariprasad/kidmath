import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AppName,
  MenuToggleButton,
  NavbarContainer,
  UserSection,
  MoreMenuWrapper,
  IconButton,
  DropdownMenu,
  DropdownItem,
  NavLeftSection,
  LogoIconContainer,
  AppNameText,
  StatItem,
  StatText,
  ArrowRight,
  BackItem,
} from "./styles";
import { RootState } from "../../store/store";
import {
  toggleMobileMenu,
  toggleMute,
  toggleTheme,
  setFontSizeLevel,
} from "../../store/slice/AlphabetSlice";
import {
  Star,
  Flame,
  Menu,
  X,
  Balloon,
  Volume2,
  VolumeX,
  MoreVertical,
  Sun,
  Moon,
  Type,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state: RootState) => state.alphabet.userStats);
  const isOpen = useSelector((state: RootState) => state.alphabet.isMobileMenuOpen);
  const isMuted = useSelector((state: RootState) => state.alphabet.isMuted);
  const themeMode = useSelector((state: RootState) => state.alphabet.theme);

  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<null | "fontSize">(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
        setActiveSubMenu(null);
      }
    };

    if (isMoreMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMoreMenuOpen]);

  return (
    <NavbarContainer data-testid="layout-navbar">
      <NavLeftSection>
        <MenuToggleButton onClick={() => dispatch(toggleMobileMenu())}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuToggleButton>
        <AppName as={Link} to="/">
          <LogoIconContainer>
            <Balloon size={24} color="white" strokeWidth={2.5} fill="rgba(255, 255, 255, 0.2)" />
          </LogoIconContainer>
          <AppNameText>kiddoo</AppNameText>
        </AppName>
      </NavLeftSection>

      <UserSection>
        <StatItem $color="#FBC531">
          <Star size={20} fill="#FBC531" strokeWidth={2} />
          <StatText>{stats.score}</StatText>
        </StatItem>
        {stats.streak > 0 && (
          <StatItem $color="#FF7675">
            <Flame size={20} fill="#FF7675" strokeWidth={2} />
            <StatText>{stats.streak}</StatText>
          </StatItem>
        )}

        <MoreMenuWrapper ref={menuRef}>
          <IconButton onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}>
            <MoreVertical size={22} />
          </IconButton>

          {isMoreMenuOpen && (
            <DropdownMenu>
              {!activeSubMenu ? (
                <>
                  <DropdownItem
                    onClick={() => {
                      dispatch(toggleMute());
                      setIsMoreMenuOpen(false);
                    }}
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    <span>{isMuted ? "Unmute Sound" : "Mute Sound"}</span>
                  </DropdownItem>

                  <DropdownItem
                    onClick={() => {
                      dispatch(toggleTheme());
                      setIsMoreMenuOpen(false);
                    }}
                  >
                    {themeMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    <span>{themeMode === "light" ? "Dark Mode" : "Light Mode"}</span>
                  </DropdownItem>

                  <DropdownItem onClick={() => setActiveSubMenu("fontSize")}>
                    <Type size={20} />
                    <span>Font Size</span>
                    <ArrowRight>
                      <ChevronRight size={18} />
                    </ArrowRight>
                  </DropdownItem>
                </>
              ) : (
                <>
                  <BackItem onClick={() => setActiveSubMenu(null)}>
                    <ChevronLeft size={20} />
                    <span>Back</span>
                  </BackItem>
                  <DropdownItem
                    onClick={() => {
                      dispatch(setFontSizeLevel("small"));
                      setIsMoreMenuOpen(false);
                      setActiveSubMenu(null);
                    }}
                  >
                    <Type size={16} />
                    <span>Small</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      dispatch(setFontSizeLevel("medium"));
                      setIsMoreMenuOpen(false);
                      setActiveSubMenu(null);
                    }}
                  >
                    <Type size={20} />
                    <span>Medium</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      dispatch(setFontSizeLevel("large"));
                      setIsMoreMenuOpen(false);
                      setActiveSubMenu(null);
                    }}
                  >
                    <Type size={24} />
                    <span>Large</span>
                  </DropdownItem>
                </>
              )}
            </DropdownMenu>
          )}
        </MoreMenuWrapper>
      </UserSection>
    </NavbarContainer>
  );
};

export default Navbar;
