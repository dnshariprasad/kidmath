import styled from "styled-components";
import { motion } from "framer-motion";
import { Card } from "../../theme/globalStyles";

export const LeaderboardCard = styled(motion.create(Card))`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  background: ${(props) => props.theme.colors.surfaceVariant}20;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary}30;
    border-radius: 10px;
  }
`;

export const Tab = styled.button<{ $active: boolean }>`
  padding: 10px 24px;
  border-radius: 100px;
  border: 1px solid
    ${(props) => (props.$active ? props.theme.colors.primary : props.theme.colors.primary + "30")};
  background: ${(props) => (props.$active ? props.theme.colors.primary : "transparent")};
  color: ${(props) => (props.$active ? "white" : props.theme.colors.primary)};
  font-weight: 800;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$active ? props.theme.colors.primary : props.theme.colors.primary + "10"};
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 80px 60px 1fr 100px 100px;
  padding: 0 20px;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.6;

  @media (max-width: 600px) {
    grid-template-columns: 50px 0px 1fr 80px 80px;
    & > div:nth-child(2) {
      display: none;
    }
  }
`;

export const Row = styled(motion.create("div"))<{ $isTop3: boolean }>`
  display: grid;
  grid-template-columns: 80px 60px 1fr 100px 100px;
  align-items: center;
  padding: 16px 20px;
  background: ${(props) =>
    props.$isTop3 ? props.theme.colors.primary + "08" : props.theme.colors.surface};
  border-radius: 16px;
  border: 1px solid
    ${(props) => (props.$isTop3 ? props.theme.colors.primary + "30" : "transparent")};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  @media (max-width: 600px) {
    grid-template-columns: 50px 0px 1fr 80px 80px;
    padding: 12px 15px;
    & > div:nth-child(2) {
      display: none;
    }
  }
`;

export const Rank = styled.div<{ $rank: number }>`
  font-size: 1.2rem;
  font-weight: 900;
  color: ${(props) => {
    if (props.$rank === 1) return "#FFD700";
    if (props.$rank === 2) return "#C0C0C0";
    if (props.$rank === 3) return "#CD7F32";
    return props.theme.colors.textSecondary;
  }};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary}20;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
`;

export const Name = styled.div`
  font-weight: 800;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const Score = styled.div`
  font-weight: 900;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: right;
`;

export const Time = styled.div`
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: right;
  opacity: 0.8;
`;
