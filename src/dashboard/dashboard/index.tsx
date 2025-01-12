import React from "react";
import { Outlet } from "react-router-dom";
import MainMenu from "../menu";
import { ContentContainer, LayoutContainer } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <LayoutContainer>
      {/* Menu remains visible */}
      <MainMenu />
      {/* Dynamic content */}
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Dashboard;
