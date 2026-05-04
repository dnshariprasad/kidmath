import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getUserTestHistory, getGlobalLeaderboard, TestResult } from "../../firebase/testService";
import { PageContainer } from "../../theme/globalStyles";
import {
  HistoryContainer,
  SplitLayout,
  SectionHeader,
  HistoryList,
  HistoryItem,
  TestInfo,
  TestName,
  DateText,
  StatBox,
  StatLabel,
  StatValue,
  ScoreBadge,
  EmptyState,
  EmptyMessage,
  LeaderboardTable,
  LeaderboardRow,
  RankText,
  AvatarSmall,
  TitleIconWrapper,
  HeaderContent,
  ScoreWrapper,
  IconContainer,
  RankIconWrapper,
  NameSection,
  ScoreValue,
  TimeValue,
  IconMargin,
} from "./styles";
import {
  Trophy,
  Calendar,
  Medal,
  Star,
  Award,
  TrendingUp,
  Sparkles,
  Clock,
  Target,
  Timer,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import KidButton from "../../components/KidButton";
import LoadingScreen from "../../components/LoadingScreen";
import ChallengeHeader from "../../components/ChallengeHeader";
import { colors } from "../../theme/colors";
import { KidoText } from "../../components/KidoText";
import { TRANSLATIONS } from "../../constants/translations";

const TestHistory: React.FC = () => {
  const t = TRANSLATIONS.en;
  const user = useSelector((state: RootState) => state.alphabet.user);
  const [history, setHistory] = useState<(TestResult & { id: string })[]>([]);
  const [leaders, setLeaders] = useState<(TestResult & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Fetch History
      if (user) {
        getUserTestHistory(user.uid)
          .then(setHistory)
          .catch((err) => console.error("History fetch error:", err));
      }

      // Fetch Leaderboard
      getGlobalLeaderboard(undefined, 10)
        .then(setLeaders)
        .catch((err) => console.error("Leaderboard fetch error:", err))
        .finally(() => setLoading(false));
    };

    fetchData();
  }, [user]);

  const getRankIcon = (rank: number) => {
    if (rank === 1) {
      return (
        <RankIconWrapper>
          <Trophy size={20} color="#FFD700" />
        </RankIconWrapper>
      );
    }
    if (rank === 2) {
      return (
        <RankIconWrapper>
          <Award size={18} color="#C0C0C0" />
        </RankIconWrapper>
      );
    }
    if (rank === 3) {
      return (
        <RankIconWrapper>
          <Medal size={18} color="#CD7F32" />
        </RankIconWrapper>
      );
    }
    return null;
  };

  if (loading) return <LoadingScreen />;

  return (
    <PageContainer>
      <HistoryContainer>
        <ChallengeHeader icon={Medal} title={t.his_title} subtitle={t.his_subtitle} streak={0} />

        <SplitLayout>
          {/* MY ACHIEVEMENTS */}
          <div>
            <SectionHeader>
              <TitleIconWrapper>
                <TrendingUp size={24} />
              </TitleIconWrapper>
              <HeaderContent>
                <KidoText fontSize="lg" fontWeight={900} $textAlign="left" $margin="0">
                  {t.his_myAchievements}
                </KidoText>
                <KidoText fontSize="xs" color="textSecondary" $textAlign="left" $margin="2px 0 0 0">
                  {t.his_myDesc}
                </KidoText>
              </HeaderContent>
            </SectionHeader>

            {history.length === 0 ? (
              <EmptyState>
                <IconContainer $bg={colors.primary + "10"}>
                  <Trophy size={60} color={colors.primary} />
                </IconContainer>
                <EmptyMessage>{t.his_emptyMsg}</EmptyMessage>
                <KidButton
                  title={t.dash_takeChallenge}
                  onClick={() => navigate("/master_test")}
                  variant="primary"
                />
              </EmptyState>
            ) : (
              <HistoryList>
                {history.map((item, index) => {
                  const percentage =
                    item.scorePercentage ?? Math.round((item.score / item.totalQuestions) * 100);
                  return (
                    <HistoryItem
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <TestInfo>
                        <TestName>{item.testTitle}</TestName>
                        <DateText>
                          <Calendar size={14} />
                          {item.timestamp.toDate().toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </DateText>
                      </TestInfo>

                      <StatBox>
                        <StatLabel>{t.his_totalTime}</StatLabel>
                        <StatValue>
                          <Clock size={16} color={colors.primary} />
                          {Math.floor(item.timeTaken / 60)}:
                          {(item.timeTaken % 60).toString().padStart(2, "0")}s
                        </StatValue>
                      </StatBox>

                      <ScoreWrapper>
                        <ScoreBadge $scorePercentage={percentage}>
                          {percentage === 100 && (
                            <IconMargin>
                              <Sparkles size={16} />
                            </IconMargin>
                          )}
                          {percentage}%
                        </ScoreBadge>
                      </ScoreWrapper>
                    </HistoryItem>
                  );
                })}
              </HistoryList>
            )}
          </div>

          {/* GLOBAL HALL OF FAME */}
          <div>
            <SectionHeader>
              <TitleIconWrapper>
                <Trophy size={24} />
              </TitleIconWrapper>
              <HeaderContent>
                <KidoText fontSize="lg" fontWeight={900} $textAlign="left" $margin="0">
                  {t.lead_title}
                </KidoText>
                <KidoText fontSize="xs" color="textSecondary" $textAlign="left" $margin="2px 0 0 0">
                  {t.lead_subtitle}
                </KidoText>
              </HeaderContent>
            </SectionHeader>

            {leaders.length === 0 ? (
              <EmptyState>
                <IconContainer $bg={colors.warning + "10"}>
                  <Star size={60} color={colors.warning} />
                </IconContainer>
                <EmptyMessage>{t.lead_noRankings}</EmptyMessage>
                <KidoText fontSize="xs" fontWeight={600} $margin="10px 0 0 0">
                  {t.his_checkSoon}
                </KidoText>
              </EmptyState>
            ) : (
              <LeaderboardTable>
                {leaders.map((leader, index) => {
                  const rank = index + 1;
                  const percentage =
                    leader.scorePercentage ??
                    Math.round((leader.score / leader.totalQuestions) * 100);
                  const initials = (leader.userName || "Explorer")
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2);

                  return (
                    <LeaderboardRow
                      key={leader.id}
                      $isTop3={rank <= 3}
                      $rank={rank}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <RankText $rank={rank}>
                        {getRankIcon(rank)}
                        {rank}
                      </RankText>
                      <AvatarSmall $rank={rank}>{initials}</AvatarSmall>
                      <NameSection>
                        <KidoText fontSize="md" fontWeight={900} $textAlign="left">
                          {leader.userName || "Explorer"}
                        </KidoText>
                        {rank === 1 && (
                          <KidoText
                            fontSize="10px"
                            color="success"
                            fontWeight={800}
                            $textAlign="left"
                          >
                            {t.his_champion}
                          </KidoText>
                        )}
                      </NameSection>
                      <StatBox $align="flex-end">
                        <StatLabel>{t.his_score}</StatLabel>
                        <ScoreValue $rank={rank}>
                          <IconMargin>
                            <Target size={14} />
                          </IconMargin>
                          {percentage}%
                        </ScoreValue>
                      </StatBox>
                      <StatBox $align="flex-end">
                        <StatLabel>{t.his_time}</StatLabel>
                        <TimeValue>
                          <IconMargin>
                            <Timer size={14} />
                          </IconMargin>
                          {Math.floor(leader.timeTaken / 60)}:
                          {(leader.timeTaken % 60).toString().padStart(2, "0")}
                        </TimeValue>
                      </StatBox>
                    </LeaderboardRow>
                  );
                })}
              </LeaderboardTable>
            )}
          </div>
        </SplitLayout>
      </HistoryContainer>
    </PageContainer>
  );
};

export default TestHistory;
