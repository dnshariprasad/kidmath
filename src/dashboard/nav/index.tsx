import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppName, MenuToggleButton, NavbarContainer, UserSection } from "./styles";
import { RootState } from "../../store/store";
import { toggleMobileMenu, toggleMute } from "../../store/slice/AlphabetSlice";
import { Star, Flame, Menu, X, Balloon, Volume2, VolumeX } from "lucide-react";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state: RootState) => state.alphabet.userStats);
  const isOpen = useSelector((state: RootState) => state.alphabet.isMobileMenuOpen);
  const isMuted = useSelector((state: RootState) => state.alphabet.isMuted);

  return (
    <NavbarContainer data-testid="layout-navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <MenuToggleButton onClick={() => dispatch(toggleMobileMenu())}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuToggleButton>
        <AppName
          as={Link}
          to="/"
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
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

      <UserSection style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div
          onClick={() => dispatch(toggleMute())}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
            background: isMuted ? "#dfe6e9" : "#6366F120",
            borderRadius: "12px",
            color: isMuted ? "#636E72" : "#6366F1",
            transition: "all 0.2s ease",
          }}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#FBC531" }}>
          <Star size={20} fill="#FBC531" strokeWidth={2} />
          <span style={{ fontWeight: 800 }}>{stats.score}</span>
        </div>
        {stats.streak > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#FF7675" }}>
            <Flame size={20} fill="#FF7675" strokeWidth={2} />
            <span style={{ fontWeight: 800 }}>{stats.streak}</span>
          </div>
        )}
      </UserSection>
    </NavbarContainer>
  );
};

export default Navbar;
