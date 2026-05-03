import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainMenu from "../Sidebar";
import { ContentContainer, LayoutContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { closeMobileMenu } from "../../../store/slice/AlphabetSlice";
import styled from "styled-components";

const Overlay = styled.div<{ $show: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.$show ? "block" : "none")};
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    z-index: 998;
  }
`;

const MainLayout: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobileMenuOpen = useSelector((state: RootState) => state.alphabet.isMobileMenuOpen);

  // Scroll to top when location changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Hide sidebar on welcome page and test pages
  const isWelcomePage = location.pathname === "/";
  const isTestPage =
    location.pathname.includes("/test") || location.pathname.includes("/master_test");
  const shouldHideSidebar = isWelcomePage || isTestPage;

  return (
    <LayoutContainer data-testid="view-dashboard">
      <Overlay $show={isMobileMenuOpen} onClick={() => dispatch(closeMobileMenu())} />
      {(!shouldHideSidebar || isMobileMenuOpen) && <MainMenu />}
      <ContentContainer
        ref={contentRef}
        data-testid="dashboard-content"
        $isFullWidth={shouldHideSidebar && !isMobileMenuOpen}
      >
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default MainLayout;
