import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  flex: 4;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
`;
