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

export const CardDetail = styled.div`
  padding: 20px;
  margin-bottom: 50px;
  margin-top: 30px;
  margin-left: 35px;
  margin-right: 35px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-height: 100%;
  max-width: 100%;
`;

export const Navbar = styled.nav`
  padding: 0px 2opx; /* Adjust padding as needed */
  background-color: #f8f9fa; /* Optional: Background color */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Subtle shadow */
`;

export const TagList = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap; /* Wrap tags to the next line */
  overflow: hidden; /* Prevent overflow outside the card */
  padding-right: 5px; /* Space for scrollbar if needed */
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical; /* Define vertical orientation */
`;

export const Tag = styled.span`
  background-color: #bbdefb;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
`;
