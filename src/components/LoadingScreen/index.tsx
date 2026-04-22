import React from "react";
import styled from "styled-components";
import { SkeletonBase, PageContainer } from "../../theme/globalStyles";

const SkeletonTitle = styled(SkeletonBase)`
  width: 300px;
  height: 48px;
  margin-bottom: 12px;
`;

const SkeletonSubtitle = styled(SkeletonBase)`
  width: 500px;
  height: 24px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SkeletonCard = styled(SkeletonBase)`
  width: 100%;
  height: 400px;
  border-radius: 28px;
`;

const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 25px;
  width: 100%;
  max-width: 1200px;
  margin-top: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`;

const LoadingScreen: React.FC = () => {
  return (
    <PageContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: "40px",
        }}
      >
        <SkeletonTitle />
        <SkeletonSubtitle />

        <SkeletonGrid>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </SkeletonGrid>
      </div>
    </PageContainer>
  );
};

export default LoadingScreen;
