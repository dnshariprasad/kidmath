import styled from "styled-components";
import { motion } from "framer-motion";

export const BigLetter = styled(motion.div)`
  font-size: clamp(12rem, 30vw, 24rem);
  font-weight: 900;
  color: #6366f1;
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;
