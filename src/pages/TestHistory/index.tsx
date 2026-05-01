import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getUserTestHistory, TestResult } from "../../firebase/testService";
import { PageContainer } from "../../theme/globalStyles";
import {
  HistoryContainer,
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
} from "./styles";
import { Trophy, Timer, Brain, Calendar, Award, Medal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import KidButton from "../../components/KidButton";
import LoadingScreen from "../../components/LoadingScreen";
import ChallengeHeader from "../../components/ChallengeHeader";
import { colors } from "../../theme/colors";

const TestHistory: React.FC = () => {
  const user = useSelector((state: RootState) => state.alphabet.user);
  const [history, setHistory] = useState<(TestResult & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      if (user) {
        try {
          const data = await getUserTestHistory(user.uid);
          setHistory(data);
        } catch (error) {
          console.error("Error fetching history:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchHistory();
  }, [user]);

  if (loading) return <LoadingScreen />;

  return (
    <PageContainer>
      <HistoryContainer>
        <ChallengeHeader
          icon={Medal}
          title="Achievement Board"
          subtitle="Tracking your journey to becoming a superstar! 🌟"
          streak={0}
        />

        {history.length === 0 ? (
          <EmptyState>
            <Trophy size={80} color={colors.slate} opacity={0.3} />
            <EmptyMessage>
              Your achievement board is empty. Ready for your first challenge?
            </EmptyMessage>
            <KidButton
              title="Start a Test"
              onClick={() => navigate("/master_test")}
              variant="primary"
              size="lg"
            />
          </EmptyState>
        ) : (
          <HistoryList>
            {history.map((item, index) => (
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
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </DateText>
                </TestInfo>

                <StatBox>
                  <StatLabel>Duration</StatLabel>
                  <StatValue>
                    <Timer size={18} />
                    {Math.floor(item.timeTaken / 60)}:
                    {(item.timeTaken % 60).toString().padStart(2, "0")}
                  </StatValue>
                </StatBox>

                <StatBox>
                  <StatLabel>Difficulty</StatLabel>
                  <StatValue $color={colors.primary}>
                    <Brain size={18} />
                    Level {item.difficulty}
                  </StatValue>
                </StatBox>

                <StatBox>
                  <StatLabel>Performance</StatLabel>
                  <StatValue $color={item.score >= 8 ? colors.success : colors.warning}>
                    <Award size={18} />
                    {item.score >= 8 ? "Mastered" : "Practicing"}
                  </StatValue>
                </StatBox>

                <ScoreBadge $score={item.score}>
                  {item.score} / {item.totalQuestions}
                </ScoreBadge>
              </HistoryItem>
            ))}
          </HistoryList>
        )}
      </HistoryContainer>
    </PageContainer>
  );
};

export default TestHistory;
