import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Timer, Star } from "lucide-react";
import { getGlobalLeaderboard, TestResult } from "../firebase/testService";
import { KidoText } from "./KidoText";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Matched exactly to GameList gap */
`;

const RankRow = styled(motion.create("div"))<{ $isLoading?: boolean; $isPlaceholder?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 80px; /* Matched to GameItem for perfect parity */
  padding: 14px 18px; /* Matched GameItem padding */
  background: ${(props) => props.theme.colors.surface}; /* Matched GameItem background */
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.primary}08; /* Matched GameItem border */
  opacity: ${(props) => (props.$isLoading ? 0.3 : props.$isPlaceholder ? 0.5 : 1)};
  cursor: default;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(6px);
    border-color: ${(props) => props.theme.colors.primary}30;
    background: ${(props) => props.theme.colors.primary}05;
  }

  &:nth-child(1) {
    background: ${(props) =>
      props.$isLoading || props.$isPlaceholder
        ? props.theme.colors.surface
        : `linear-gradient(90deg, #ffd70015, transparent)`};
    border-color: ${(props) =>
      props.$isLoading || props.$isPlaceholder ? props.theme.colors.primary + "08" : "#ffd70030"};
  }
`;

const RankBadge = styled.div<{ $rank: number }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${(props) => {
    if (props.$rank === 1) return "#FFD700";
    if (props.$rank === 2) return "#C0C0C0";
    if (props.$rank === 3) return "#CD7F32";
    return props.theme.colors.surfaceVariant;
  }};
  color: ${(props) => (props.$rank <= 3 ? "#000" : props.theme.colors.textPrimary)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 0.75rem;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary}20;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.7rem;
  color: ${(props) => props.theme.colors.textSecondary};
  opacity: 0.8;
`;

const LoadingText = styled.div`
  height: 14px;
  width: 80px;
  background: ${(props) => props.theme.colors.textSecondary}20;
  border-radius: 4px;
`;

const LoadingStat = styled.div`
  height: 10px;
  width: 40px;
  background: ${(props) => props.theme.colors.textSecondary}15;
  border-radius: 4px;
`;

export const MiniLeaderboard: React.FC = () => {
  const [leaders, setLeaders] = useState<(TestResult & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const data = await getGlobalLeaderboard(undefined, 3);
        setLeaders(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaders();
  }, []);

  if (loading) {
    return (
      <ListContainer>
        {Array.from({ length: 3 }).map((_, index) => (
          <RankRow key={`loading-${index}`} $isLoading>
            <RankBadge $rank={index + 1}>{index + 1}</RankBadge>
            <Avatar />
            <Info>
              <LoadingText />
              <Stats>
                <LoadingStat />
              </Stats>
            </Info>
          </RankRow>
        ))}
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      {Array.from({ length: 3 }).map((_, index) => {
        const leader = leaders[index];

        if (!leader) {
          return (
            <RankRow key={`placeholder-${index}`} $isPlaceholder>
              <RankBadge $rank={index + 1}>{index + 1}</RankBadge>
              <Avatar>?</Avatar>
              <Info>
                <KidoText fontSize="sm" fontWeight={700} $textAlign="left" color="textSecondary">
                  Waiting for Champion...
                </KidoText>
                <Stats>
                  <StatItem>--%</StatItem>
                  <StatItem>--:--</StatItem>
                </Stats>
              </Info>
            </RankRow>
          );
        }

        const initials = (leader.userName || "Explorer")
          .split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2);

        return (
          <RankRow
            key={leader.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <RankBadge $rank={index + 1}>{index + 1}</RankBadge>
            <Avatar>{initials}</Avatar>
            <Info>
              <KidoText fontSize="sm" fontWeight={700} $textAlign="left">
                {leader.userName || "Explorer"}
              </KidoText>
              <Stats>
                <StatItem>
                  <Star size={10} fill="#FFD700" color="#FFD700" />
                  {leader.scorePercentage ??
                    Math.round((leader.score / leader.totalQuestions) * 100)}
                  %
                </StatItem>
                <StatItem>
                  <Timer size={10} />
                  {Math.floor(leader.timeTaken / 60)}:
                  {(leader.timeTaken % 60).toString().padStart(2, "0")}
                </StatItem>
              </Stats>
            </Info>
          </RankRow>
        );
      })}
    </ListContainer>
  );
};
