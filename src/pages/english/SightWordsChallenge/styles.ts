import styled from "styled-components";
import { motion } from "framer-motion";

export const WordDisplay = styled(motion.div)`
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin: 40px 0;
  font-family: ${(props) => props.theme.fonts.primary};
  text-transform: capitalize;
`;

export const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
`;

export const IconMargin = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;
