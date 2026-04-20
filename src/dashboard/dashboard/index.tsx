import React from "react";
import { Outlet } from "react-router-dom";
import MainMenu from "../menu";
import { ContentContainer, LayoutContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { closeMobileMenu } from "../../store/slice/AlphabetSlice";
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

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state: RootState) => state.alphabet.isMobileMenuOpen);

  return (
    <LayoutContainer>
      <Overlay $show={isMobileMenuOpen} onClick={() => dispatch(closeMobileMenu())} />
      <MainMenu />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Dashboard;
