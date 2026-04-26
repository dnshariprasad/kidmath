import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  ArrowRight,
  BackItem,
} from "./styles";
import NamePrompt from "../../components/NamePrompt/index.tsx";
import SetStreakModal from "../../components/SetStreakModal/index.tsx";
import { RootState } from "../../store/store";
import { TRANSLATIONS } from "../../constants/translations";
import {
  toggleMobileMenu,
  toggleMute,
  toggleTheme,
  setFontSizeLevel,
} from "../../store/slice/AlphabetSlice";
import {
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
  User,
  Zap,
  Share2,
} from "lucide-react";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isOpen = useSelector((state: RootState) => state.alphabet.isMobileMenuOpen);
  const isMuted = useSelector((state: RootState) => state.alphabet.isMuted);
  const themeMode = useSelector((state: RootState) => state.alphabet.theme);

  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<null | "fontSize">(null);
  const [showNameUpdate, setShowNameUpdate] = useState(false);
  const [showSetStreak, setShowSetStreak] = useState(false);
  const t = TRANSLATIONS.en;
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

  const isWelcomePage = location.pathname === "/" || !location.pathname;

  return (
    <NavbarContainer data-testid="layout-navbar">
      <NavLeftSection>
        <MenuToggleButton $isVisible={!isWelcomePage} onClick={() => dispatch(toggleMobileMenu())}>
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
                    <span>{isMuted ? t.nav_unmuteSound : t.nav_muteSound}</span>
                  </DropdownItem>

                  <DropdownItem
                    onClick={() => {
                      dispatch(toggleTheme());
                      setIsMoreMenuOpen(false);
                    }}
                  >
                    {themeMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    <span>{themeMode === "light" ? t.nav_darkMode : t.nav_lightMode}</span>
                  </DropdownItem>

                  <DropdownItem onClick={() => setActiveSubMenu("fontSize")}>
                    <Type size={20} />
                    <span>{t.nav_fontSize}</span>
                    <ArrowRight>
                      <ChevronRight size={18} />
                    </ArrowRight>
                  </DropdownItem>

                  <DropdownItem
                    onClick={() => {
                      setShowNameUpdate(true);
                      setIsMoreMenuOpen(false);
                    }}
                  >
                    <User size={20} />
                    <span>{t.nav_updateName}</span>
                  </DropdownItem>

                  <DropdownItem
                    onClick={() => {
                      setShowSetStreak(true);
                      setIsMoreMenuOpen(false);
                    }}
                  >
                    <Zap size={20} />
                    <span>{t.nav_setProgress}</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={async () => {
                      setIsMoreMenuOpen(false);
                      const shareData = {
                        title: "Kiddoo - Fun Learning for Kids",
                        text: "Check out Kiddoo, a fun and interactive learning platform for kids! 🚀",
                        url: "https://dnshariprasad.github.io/kiddoo/",
                      };
                      try {
                        if (navigator.share) {
                          await navigator.share(shareData);
                        } else {
                          await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
                          alert("Link copied to clipboard! 📋");
                        }
                      } catch (err) {
                        console.error("Error sharing:", err);
                      }
                    }}
                  >
                    <Share2 size={20} />
                    <span>Share Kiddoo</span>
                  </DropdownItem>
                </>
              ) : (
                <>
                  <BackItem onClick={() => setActiveSubMenu(null)}>
                    <ChevronLeft size={20} />
                    <span>{t.com_back}</span>
                  </BackItem>
                  <DropdownItem
                    onClick={() => {
                      dispatch(setFontSizeLevel("small"));
                      setIsMoreMenuOpen(false);
                      setActiveSubMenu(null);
                    }}
                  >
                    <Type size={16} />
                    <span>{t.nav_small}</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      dispatch(setFontSizeLevel("medium"));
                      setIsMoreMenuOpen(false);
                      setActiveSubMenu(null);
                    }}
                  >
                    <Type size={20} />
                    <span>{t.nav_medium}</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      dispatch(setFontSizeLevel("large"));
                      setIsMoreMenuOpen(false);
                      setActiveSubMenu(null);
                    }}
                  >
                    <Type size={24} />
                    <span>{t.nav_large}</span>
                  </DropdownItem>
                </>
              )}
            </DropdownMenu>
          )}
        </MoreMenuWrapper>
      </UserSection>
      {showNameUpdate && <NamePrompt onComplete={() => setShowNameUpdate(false)} />}
      {showSetStreak && <SetStreakModal onClose={() => setShowSetStreak(false)} />}
    </NavbarContainer>
  );
};

export default Navbar;
