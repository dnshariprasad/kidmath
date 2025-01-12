import styled from "styled-components";

// Styled container that centers items horizontally
export const CenteredContainerHorizontally = styled.div`
  display: flex;
  align-items: center; /* Centers items vertically (optional) */
  height: auto; /* Optional: Takes full height of the viewport */
  gap: 10px;
`;

export const CenteredContainerVertical = styled.div<{ padding?: string }>`
  padding: ${(props) => props.padding || "10px"}; /* Defaults to 10px */
  display: flex;
  flex-direction: column; /* Arranges items vertically */
  align-items: center; /* Centers items horizontally */
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
  color: #ffffff;
  background-color: {(props) => props.theme.sub};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1rem;
`;

export const CardDetail = styled.div`
  margin-top: 30px;
  display: flex;
  width: 90%; /* Fills most of the screen on smaller devices */
  max-width: 800px; /* Sets a maximum width for larger screens */
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    /* For larger screens (like tablets and desktops) */
    width: 75%;
  }

  @media (min-width: 1024px) {
    /* For desktops */
    width: 50%;
  }
`;

export const CardItem = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddleItem = styled.div`
  flex-grow: 1;
  padding: 10px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
