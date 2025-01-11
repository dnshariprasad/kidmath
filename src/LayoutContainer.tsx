import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack menu and content vertically on mobile */
    height: auto;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      {/* Menu remains visible */}
      <Menu />
      {/* Dynamic content */}
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
