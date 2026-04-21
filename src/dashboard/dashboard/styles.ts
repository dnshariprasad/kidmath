import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 70px); /* Fill remaining viewport */
  margin-top: 70px; /* Offset for fixed navbar */
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden; /* Prevent body scroll */

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 70px;
    overflow: visible;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto; /* Independent scroll */
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
    overflow-y: visible;
  }
`;
