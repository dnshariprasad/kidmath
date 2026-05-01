import styled from "styled-components";
import { motion } from "framer-motion";

export const HistoryContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 10px 40px 40px 40px;
  background: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 10px 20px 20px 20px;
  }
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 32px;
`;

export const HistoryItem = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  padding: 20px 32px;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows?.sm || "0 4px 12px rgba(0, 0, 0, 0.05)"};
  border: 2px solid ${({ theme }) => theme.colors.border};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
  align-items: center;
  gap: 20px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.005);
    box-shadow: ${({ theme }) => theme.shadows?.md || "0 8px 24px rgba(0, 0, 0, 0.08)"};
    border-color: ${({ theme }) => theme.colors.primary}40;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
    padding: 20px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const TestInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TestName = styled.h3`
  font-size: 1.2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const DateText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StatLabel = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const StatValue = styled.span<{ $color?: string }>`
  font-size: 1.1rem;
  font-weight: 900;
  color: ${(props) => props.$color || (({ theme }) => theme.colors.textPrimary)};
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ScoreBadge = styled.div<{ $score: number }>`
  padding: 10px 20px;
  border-radius: 16px;
  background: ${(props) =>
    props.$score >= 8 ? props.theme.colors.success + "15" : props.theme.colors.warning + "15"};
  color: ${(props) =>
    props.$score >= 8 ? props.theme.colors.success : props.theme.colors.warning};
  font-weight: 900;
  font-size: 1.2rem;
  text-align: center;
  border: 2px solid
    ${(props) =>
      props.$score >= 8 ? props.theme.colors.success + "25" : props.theme.colors.warning + "25"};
  min-width: 120px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 100px 40px;
  background: ${({ theme }) => theme.colors.surfaceVariant};
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border: 2px dashed ${({ theme }) => theme.colors.border};
  width: 100%;
`;

export const EmptyMessage = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 700;
  opacity: 0.8;
  max-width: 400px;
  margin: 0;
`;
