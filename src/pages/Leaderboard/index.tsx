import React, { useEffect, useState } from "react";
import { Timer, Star, Medal } from "lucide-react";
import { PageContainer, PageHeader, PageTitle, PageSubtitle } from "../../theme/globalStyles";
import { getGlobalLeaderboard, TestResult } from "../../firebase/testService";
import {
  LeaderboardCard,
  TabContainer,
  Tab,
  Table,
  TableHeader,
  Row,
  Rank,
  UserAvatar,
  Name,
  Score,
  Time,
} from "./styles";

const Leaderboard: React.FC = () => {
  const [leaders, setLeaders] = useState<(TestResult & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "Global All" },
    { id: "math_test", label: "Math Hero" },
    { id: "english_missing_letters", label: "English" },
    { id: "spelling_test", label: "Spelling" },
    { id: "logic_test", label: "Logic" },
  ];

  useEffect(() => {
    const fetchLeaders = async () => {
      setLoading(true);
      try {
        const testId = activeTab === "all" ? undefined : activeTab;
        const data = await getGlobalLeaderboard(testId, 50);
        setLeaders(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaders();
  }, [activeTab]);

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Medal size={20} color="#FFD700" />;
    if (rank === 2) return <Medal size={20} color="#C0C0C0" />;
    if (rank === 3) return <Medal size={20} color="#CD7F32" />;
    return null;
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Hall of Fame 🏆</PageTitle>
        <PageSubtitle>The top achievers in the Kiddoo universe!</PageSubtitle>
      </PageHeader>

      <LeaderboardCard
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <TabContainer>
          {tabs.map((tab) => (
            <Tab key={tab.id} $active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>
              {tab.label}
            </Tab>
          ))}
        </TabContainer>

        {loading ? (
          <div style={{ textAlign: "center", padding: "40px" }}>Loading rankings...</div>
        ) : (
          <Table>
            <TableHeader>
              <div>Rank</div>
              <div>User</div>
              <div>Name</div>
              <div style={{ textAlign: "right" }}>Score</div>
              <div style={{ textAlign: "right" }}>Time</div>
            </TableHeader>

            {leaders.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px", opacity: 0.6 }}>
                No rankings yet. Be the first to top the chart! 🚀
              </div>
            ) : (
              leaders.map((leader, index) => {
                const rank = index + 1;
                const initials = (leader.userName || "Explorer")
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2);

                return (
                  <Row
                    key={leader.id}
                    $isTop3={rank <= 3}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Rank $rank={rank}>
                      {getRankIcon(rank)}
                      {rank}
                    </Rank>
                    <UserAvatar>{initials}</UserAvatar>
                    <Name>{leader.userName || "Explorer"}</Name>
                    <Score>
                      <Star size={16} fill="currentColor" />
                      {leader.scorePercentage ??
                        Math.round((leader.score / leader.totalQuestions) * 100)}
                      %
                    </Score>
                    <Time>
                      <Timer size={16} />
                      {Math.floor(leader.timeTaken / 60)}:
                      {(leader.timeTaken % 60).toString().padStart(2, "0")}
                    </Time>
                  </Row>
                );
              })
            )}
          </Table>
        )}
      </LeaderboardCard>
    </PageContainer>
  );
};

export default Leaderboard;
