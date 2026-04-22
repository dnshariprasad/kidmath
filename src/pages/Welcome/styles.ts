import styled from "styled-components";
import { motion } from "framer-motion";
import { Card } from "../../theme/globalStyles";

export const ColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 25px;
  width: 100%;
  max-width: 1200px;
  margin-top: 60px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`;

export const RevampColumn = styled(motion(Card))`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.surfaceVariant}40;
`;

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primary};
`;

export const GameList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const GameItem = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  padding: 14px 18px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.primary}08;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(6px);
    border-color: ${(props) => props.theme.colors.primary}30;
    background: ${(props) => props.theme.colors.primary}05;
  }
`;

export const GameIcon = styled.span`
  color: ${(props) => props.theme.colors.primary};
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const GameInfo = styled.div`
  flex: 1;
`;

export const GameTitle = styled.div`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const GameDesc = styled.div`
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.colors.textSecondary};
  opacity: 0.7;
  padding-left: 28px;
`;

export const RevampFooter = styled(motion(Card))`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.primary}CC 100%
  );
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  max-width: 1200px;
  border: none;
`;

export const FooterContent = styled.div`
  max-width: 600px;
`;
