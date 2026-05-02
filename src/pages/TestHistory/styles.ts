import styled from "styled-components";
import { motion } from "framer-motion";

export const HistoryContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px 40px 40px 40px;
  background: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 10px 20px 20px 20px;
  }
`;

export const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 32px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 24px;
  padding: 16px 24px;
  background: ${(props) => props.theme.colors.surfaceVariant}40;
  backdrop-filter: blur(10px);
  border-radius: 24px;
  color: ${(props) => props.theme.colors.textPrimary};
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.shadows?.sm || "0 4px 12px rgba(0, 0, 0, 0.05)"};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6px;
    background: ${(props) => props.theme.colors.primary};
  }
`;

export const HeaderContent = styled.div`
  flex: 1;
`;

export const TitleIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.primary}40;
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const HistoryItem = styled(motion.create("div"))`
  background: ${({ theme }) => theme.colors.surface};
  padding: 16px 24px;
  min-height: 90px;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows?.sm || "0 4px 12px rgba(0, 0, 0, 0.05)"};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary}40;
    box-shadow: ${({ theme }) => theme.shadows?.md || "0 8px 24px rgba(0, 0, 0, 0.08)"};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    padding: 16px;
    & > div:nth-child(3) {
      grid-column: span 2;
    }
  }
`;

export const TestInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TestName = styled.h3`
  font-size: 1.1rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const DateText = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: 0.8;
`;

export const StatBox = styled.div<{ $align?: string }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: ${(props) => props.$align || "flex-start"};
`;

export const StatLabel = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  opacity: 0.6;
`;

export const StatValue = styled.span<{ $color?: string }>`
  font-size: 1rem;
  font-weight: 900;
  color: ${(props) => props.$color || props.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ScoreWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ScoreBadge = styled.div<{ $scorePercentage: number }>`
  padding: 10px 16px;
  border-radius: 16px;
  background: ${(props) =>
    props.$scorePercentage >= 90
      ? props.theme.colors.success + "15"
      : props.$scorePercentage >= 60
        ? props.theme.colors.primary + "10"
        : props.theme.colors.warning + "15"};
  color: ${(props) =>
    props.$scorePercentage >= 90
      ? props.theme.colors.success
      : props.$scorePercentage >= 60
        ? props.theme.colors.primary
        : props.theme.colors.warning};
  font-weight: 900;
  font-size: 1.1rem;
  text-align: center;
  border: 1px solid
    ${(props) =>
      props.$scorePercentage >= 90
        ? props.theme.colors.success + "30"
        : props.$scorePercentage >= 60
          ? props.theme.colors.primary + "30"
          : props.theme.colors.warning + "30"};
  box-shadow: 0 4px 12px
    ${(props) => (props.$scorePercentage >= 90 ? props.theme.colors.success + "10" : "transparent")};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 40px;
  background: ${({ theme }) => theme.colors.surfaceVariant}20;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 2px dashed ${({ theme }) => theme.colors.border};
  width: 100%;
`;

export const IconContainer = styled.div<{ $bg?: string }>`
  background: ${(props) => props.$bg || props.theme.colors.primary + "10"};
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyMessage = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 700;
  opacity: 0.8;
  max-width: 400px;
  margin: 0;
`;

// LEADERBOARD SPECIFIC STYLES
export const LeaderboardTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LeaderboardRow = styled(motion.create("div"))<{ $isTop3: boolean; $rank: number }>`
  display: grid;
  grid-template-columns: 50px 50px 1fr 100px 100px;
  align-items: center;
  padding: 16px 20px;
  min-height: 90px;
  background: ${(props) => props.theme.colors.surface};
  border-radius: 24px;
  border: 1px solid
    ${(props) => {
      if (props.$rank === 1) return "#FFD70060";
      if (props.$rank === 2) return "#C0C0C060";
      if (props.$rank === 3) return "#CD7F3260";
      return props.theme.colors.border;
    }};
  box-shadow: ${(props) => {
    if (props.$rank === 1) return "0 8px 20px #FFD70015";
    if (props.$rank === 2) return "0 8px 20px #C0C0C015";
    if (props.$rank === 3) return "0 8px 20px #CD7F3215";
    return "none";
  }};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    border-color: ${(props) => props.theme.colors.primary}40;
  }

  @media (max-width: 600px) {
    grid-template-columns: 40px 0px 1fr 80px 80px;
    padding: 12px;
    & > div:nth-child(2) {
      display: none;
    }
  }
`;

export const RankText = styled.div<{ $rank: number }>`
  font-weight: 900;
  font-size: 1.25rem;
  color: ${(props) => {
    if (props.$rank === 1) return "#FFD700";
    if (props.$rank === 2) return "#C0C0C0";
    if (props.$rank === 3) return "#CD7F32";
    return props.theme.colors.textSecondary;
  }};
  text-shadow: ${(props) => (props.$rank <= 3 ? "0 2px 4px rgba(0,0,0,0.1)" : "none")};
  display: flex;
  align-items: center;
`;

export const NameSection = styled.div`
  flex: 1;
  margin-left: 14px;
`;

export const AvatarSmall = styled.div<{ $rank: number }>`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: ${(props) => {
    if (props.$rank === 1) return "#FFD70020";
    if (props.$rank === 2) return "#C0C0C020";
    if (props.$rank === 3) return "#CD7F3220";
    return props.theme.colors.primary + "15";
  }};
  color: ${(props) => {
    if (props.$rank === 1) return "#B8860B";
    if (props.$rank === 2) return "#708090";
    if (props.$rank === 3) return "#8B4513";
    return props.theme.colors.primary;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1rem;
  border: 2px solid
    ${(props) => {
      if (props.$rank === 1) return "#FFD70040";
      if (props.$rank === 2) return "#C0C0C040";
      if (props.$rank === 3) return "#CD7F3240";
      return "transparent";
    }};
`;

export const RankIconWrapper = styled.span`
  margin-right: 4px;
  display: flex;
  align-items: center;
`;

export const ScoreValue = styled.div<{ $rank?: number }>`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.$rank && props.$rank <= 3 ? props.theme.colors.primary : props.theme.colors.textPrimary};
  font-weight: 900;
`;

export const TimeValue = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  opacity: 0.8;
`;

export const IconMargin = styled.span`
  margin-right: 6px;
  display: flex;
  align-items: center;
`;
