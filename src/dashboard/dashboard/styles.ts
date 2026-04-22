import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 70px);
  width: 100%; /* Ensure full width */
  background-color: ${(props) => props.theme.colors.background};
  margin-top: 70px;
  overflow: hidden;
  padding-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 70px;
    padding-top: 10px;
    overflow: visible;
  }
`;

export const ContentContainer = styled.div<{ $isFullWidth?: boolean }>`
  flex: ${(props) => (props.$isFullWidth ? "0 0 100%" : "1")};
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
    overflow-y: visible;
  }
`;
