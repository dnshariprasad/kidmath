import styled from "styled-components";

// Styled container that centers items horizontally
export const CenteredContainerHorizontally = styled.div`
  display: flex;
  align-items: center; /* Centers items vertically (optional) */
  height: auto; /* Optional: Takes full height of the viewport */
  gap: 10px;
`;

export const CenteredContainerVertical = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column; /* Arranges items vertically */
  align-items: center; /* Optional: Centers items horizontally */
  height: auto; /* Takes full height of the viewport */
  gap: 10px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100px;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;
