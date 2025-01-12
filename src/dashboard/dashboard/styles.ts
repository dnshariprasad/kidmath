import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack menu and content vertically on mobile */
    height: auto;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;
