import styled from "styled-components";
import { Reorder } from "framer-motion";

export const SortContainer = styled(Reorder.Group)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 400px;
  list-style: none;
  padding: 0;
  margin: 30px 0;
`;

export const SortItem = styled(Reorder.Item)`
  background: white;
  padding: 20px;
  border-radius: 20px;
  border: 3px solid ${(props) => props.theme.colors.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  cursor: grab;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  &:active {
    cursor: grabbing;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;
