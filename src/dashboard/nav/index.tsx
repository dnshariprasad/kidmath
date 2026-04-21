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
} from "./styles";
import { RootState } from "../../store/store";
import { toggleMobileMenu, toggleMute } from "../../store/slice/AlphabetSlice";
import { Star, Flame, Menu, X, Balloon, Volume2, VolumeX, MoreVertical } from "lucide-react";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state: RootState) => state.alphabet.userStats);
  const isOpen = useSelector((state: RootState) => state.alphabet.isMobileMenuOpen);
  const isMuted = useSelector((state: RootState) => state.alphabet.isMuted);

  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
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
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <MenuToggleButton onClick={() => dispatch(toggleMobileMenu())}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuToggleButton>
        <AppName
          as={Link}
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              background: "#6366F1",
              padding: "8px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(99, 102, 241, 0.3)",
            }}
          >
            <Balloon size={24} color="white" strokeWidth={2.5} fill="rgba(255, 255, 255, 0.2)" />
          </div>
          <span style={{ fontSize: "1.8rem", letterSpacing: "-1px" }}>kiddoo</span>
        </AppName>
      </div>

      <UserSection>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "#FBC531",
          }}
        >
          <Star size={20} fill="#FBC531" strokeWidth={2} />
          <span style={{ fontWeight: 800 }}>{stats.score}</span>
        </div>
        {stats.streak > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#FF7675",
            }}
          >
            <Flame size={20} fill="#FF7675" strokeWidth={2} />
            <span style={{ fontWeight: 800 }}>{stats.streak}</span>
          </div>
        )}

        <MoreMenuWrapper ref={menuRef}>
          <IconButton onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}>
            <MoreVertical size={22} />
          </IconButton>

          {isMoreMenuOpen && (
            <DropdownMenu>
              <DropdownItem
                onClick={() => {
                  dispatch(toggleMute());
                  setIsMoreMenuOpen(false);
                }}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                <span>{isMuted ? "Unmute Sound" : "Mute Sound"}</span>
              </DropdownItem>
            </DropdownMenu>
          )}
        </MoreMenuWrapper>
      </UserSection>
    </NavbarContainer>
  );
};

export default Navbar;
