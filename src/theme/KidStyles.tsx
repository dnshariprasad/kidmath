import styled from "styled-components";
interface ContainerProps {
  height?: string; // Optional prop for height
  gap?: string; // Optional prop for gap
  direction?: "row" | "column"; // Flex direction (row or column)
  padding?: string; // Optional prop for padding
  justify?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly"; // Justify content (horizontal)
}
// Styled components
export const Container = styled.div<ContainerProps>`
  text-align: center;
  font-family: Arial, sans-serif;
  padding: ${({ padding }) => padding || "10px"};
  gap: ${({ gap }) => gap || "10px"};
  padding: ${({ padding }) => padding || "0px"};
  justify-content: ${({ justify }) =>
    justify || "center"}; /* Horizontal alignment */
`;

// Styled container that centers items horizontally
export const CenteredContainerHorizontally = styled.div`
  display: flex;
  align-items: center; /* Centers items vertically (optional) */
  height: auto; /* Optional: Takes full height of the viewport */
  gap: 10px;
`;

export const CenteredContainerHorizontallyDynamic = styled.div`
  display: flex;
  align-items: center; /* Centers items vertically (optional) */
  height: auto; /* Optional: Takes full height of the viewport */
  gap: 10px;
  @media (max-width: 768px) {
    /* Mobile screens */
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
    width: 100%; /* Ensure the container takes full width */
  }
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
  background-color: ${(props) => props.theme.colors.sub};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1rem;
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

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 200px; /* Adjust height to fit ~5 items */
  overflow-y: auto; /* Enable vertical scrolling */
  padding: 10px; /* Optional: Add padding for spacing */
`;

export const ListItem = styled.li`
  padding: 5px 0;
`;
