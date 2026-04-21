import styled from "styled-components";
import { motion } from "framer-motion";

export const HindiDisplay = styled(motion.div)`
  font-size: clamp(4rem, 20vw, 10rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: clamp(3rem, 25vw, 6rem);
  }
`;
