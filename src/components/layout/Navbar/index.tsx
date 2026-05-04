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
  UserAvatarContainer,
  UserInitial,
} from "./styles";
import { RootState } from "../../../store/store";
import { TRANSLATIONS } from "../../../constants/translations";
import {
  toggleMobileMenu,
  toggleMute,
  toggleTheme,
  setFontSizeLevel,
  logout,
} from "../../../store/slice/AlphabetSlice";
import { auth } from "../../../firebase/config";
import { signOut } from "firebase/auth";
import {
  Menu,
  X,
  Balloon,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Type,
  ChevronRight,
  ChevronLeft,
  Share2,
  History,
  LogOut,
  ChevronDown,
} from "lucide-react";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isOpen = useSelector((state: RootState) => state.alphabet.isMobileMenuOpen);
  const isMuted = useSelector((state: RootState) => state.alphabet.isMuted);
  const themeMode = useSelector((state: RootState) => state.alphabet.theme);
  const user = useSelector((state: RootState) => state.alphabet.user);

  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<null | "fontSize">(null);
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

  if (!user) {
    return null;
  }

  const userInitial = user.displayName ? user.displayName[0] : user.email ? user.email[0] : "U";

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
          <AppNameText>{t.nav_appName}</AppNameText>
        </AppName>
      </NavLeftSection>

      <UserSection>
        <IconButton as={Link} to="/test_history" title={t.nav_historyTitle}>
          <History size={20} />
        </IconButton>

        <IconButton
          onClick={async () => {
            const shareData = {
              title: t.nav_appName,
              text: t.nav_shareText,
              url: "https://dnshariprasad.github.io/kiddoo/",
            };
            try {
              if (navigator.share) {
                await navigator.share(shareData);
              } else {
                await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
                alert(t.cert_copied);
              }
            } catch (err) {
              console.error("Error sharing:", err);
            }
          }}
          title={t.nav_shareTitle}
        >
          <Share2 size={20} />
        </IconButton>

        <MoreMenuWrapper ref={menuRef}>
          <UserAvatarContainer onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}>
            <UserInitial>{userInitial}</UserInitial>
            <ChevronDown size={16} color="white" />
          </UserAvatarContainer>

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
                    onClick={async () => {
                      try {
                        await signOut(auth);
                        dispatch(logout());
                        setIsMoreMenuOpen(false);
                      } catch (err) {
                        console.error("Logout error:", err);
                      }
                    }}
                  >
                    <LogOut size={20} />
                    <span>{t.nav_logout}</span>
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
    </NavbarContainer>
  );
};

export default Navbar;
