import styled from "styled-components";
import { motion } from "framer-motion";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
`;

export const LoginCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  padding: 40px;
  border-radius: 32px;
  box-shadow: ${({ theme }) => theme.shadows?.xl || "0 20px 40px rgba(0, 0, 0, 0.1)"};
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 2px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 480px) {
    padding: 30px 20px;
    gap: 20px;
    border-radius: 24px;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-weight: 800;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: 4px;
`;

export const Input = styled.input`
  padding: 14px 18px;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceVariant};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease;
  font-weight: 600;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.5;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary}20;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.warning || "#ef4444"};
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  background: ${({ theme }) => theme.colors.warning}15;
  padding: 10px;
  border-radius: 12px;
`;

export const SwitchText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 10px;
  font-weight: 600;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 900;
    cursor: pointer;
    margin-left: 4px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 2px solid ${({ theme }) => theme.colors.border};
  padding: 14px;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceVariant};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows?.md || "0 4px 12px rgba(0, 0, 0, 0.1)"};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 10px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 2px;
    background: ${({ theme }) => theme.colors.border};
  }

  span {
    font-size: 0.85rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
