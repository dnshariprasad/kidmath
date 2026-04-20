import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppName, MenuToggleButton, NavbarContainer, UserSection } from "./styles";
import { RootState } from "../../store/store";
import { toggleMobileMenu } from "../../store/slice/AlphabetSlice";
import { Star, Flame, Menu, X, Balloon } from "lucide-react";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state: RootState) => state.alphabet.userStats);
  const isOpen = useSelector((state: RootState) => state.alphabet.isMobileMenuOpen);

  return (
    <NavbarContainer data-testid="layout-navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <MenuToggleButton onClick={() => dispatch(toggleMobileMenu())}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuToggleButton>
        <AppName as={Link} to="/" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Balloon size={24} color="#FF7675" strokeWidth={2.5} fill="#FF767520" />
          kiddoo
        </AppName>
      </div>

      <UserSection style={{ display: "flex", alignItems: "center", gap: "15px" }}>
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
