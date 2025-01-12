import React from "react";
import { Link } from "react-router-dom";
import { AppName, NavbarContainer } from "./styles";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      {/* App Name with Link */}
      <AppName as={Link} to="/">
        kiddoo
      </AppName>

      {/* Navigation Links */}
      {/* <NavLinks>
        <NavLink to="/counting">Counting</NavLink>
        <NavLink to="/sight_words">Sight Words</NavLink>
        <NavLink to="/alphabet">Alphabet</NavLink>
      </NavLinks> */}
    </NavbarContainer>
  );
};

export default Navbar;
