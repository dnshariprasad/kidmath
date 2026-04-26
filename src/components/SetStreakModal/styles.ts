import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

export const Modal = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  padding: 30px;
  border-radius: ${(props) => props.theme.borderRadius.large};
  width: 100%;
  max-width: 450px;
  text-align: center;
  border: 4px solid ${(props) => props.theme.colors.primary}20;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textSecondary};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius.round};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary}10;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${(props) => props.theme.colors.warning}15;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  color: ${(props) => props.theme.colors.warning};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border-radius: ${(props) => props.theme.borderRadius.small};
  border: 2px solid ${(props) => props.theme.colors.primary}20;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1rem;
  background: ${(props) => props.theme.colors.surfaceVariant};
  color: ${(props) => props.theme.colors.textPrimary};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const NumberInput = styled.input`
  width: 80px;
  padding: 12px;
  border-radius: ${(props) => props.theme.borderRadius.small};
  border: 2px solid ${(props) => props.theme.colors.primary}20;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  background: ${(props) => props.theme.colors.surfaceVariant};
  color: ${(props) => props.theme.colors.textPrimary};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;
