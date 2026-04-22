import React from "react";
import { useNavigate } from "react-router-dom";
import KidButton from "../../components/KidButton";
import { PageContainer, PageHeader, PageTitle, PageSubtitle } from "../../theme/globalStyles";
import {
  Calculator,
  Type,
  Languages,
  Trophy,
  BookOpen,
  Gamepad2,
  CheckCircle2,
  Search,
  Grid3X3,
  ArrowUpDown,
  LayoutGrid,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setMode } from "../../store/slice/AlphabetSlice";
import { GAME_CATEGORIES } from "../../constants/gameData";
import {
  ColumnsContainer,
  RevampColumn,
  ColumnHeader,
  GameList,
  GameItem,
  GameIcon,
  GameInfo as GameInfoContainer,
  GameTitle,
  GameDesc,
  RevampFooter,
  FooterContent,
} from "./styles";
import { KidoText } from "../../components/KidoText";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.alphabet.userName);
  const handleGameClick = (path: string, mode: "learn" | "practice" | "test") => {
    dispatch(setMode(mode));
    navigate(path);
  };

  const handleExploreClick = (mode: "learn" | "practice" | "test") => {
    const firstGame = GAME_CATEGORIES[mode][0];
    if (firstGame) {
      dispatch(setMode(mode));
      navigate(firstGame.path);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Type":
        return <Type size={20} />;
      case "Languages":
        return <Languages size={20} />;
      case "BookOpen":
        return <BookOpen size={20} />;
      case "Search":
        return <Search size={20} />;
      case "Gamepad2":
        return <Gamepad2 size={20} />;
      case "Calculator":
        return <Calculator size={20} />;
      case "Grid3X3":
        return <Grid3X3 size={20} />;
      case "ArrowUpDown":
        return <ArrowUpDown size={20} />;
      case "LayoutGrid":
        return <LayoutGrid size={20} />;
      case "Trophy":
        return <Trophy size={20} />;
      default:
        return <Calculator size={20} />;
    }
  };

  return (
    <PageContainer data-testid="view-welcome">
      <PageHeader>
        <PageTitle>Welcome, {userName || "Explorer"}! 👋</PageTitle>
        <PageSubtitle>The ultimate learning playground for curious kids! 🌟</PageSubtitle>
      </PageHeader>

      <ColumnsContainer>
        {/* LEARN COLUMN */}
        <RevampColumn
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ColumnHeader>
            <BookOpen size={28} />
            <KidoText fontSize="xl" color="primary" fontWeight={900}>
              Learn
            </KidoText>
          </ColumnHeader>
          <GameList>
            {GAME_CATEGORIES.learn.slice(0, 3).map((game) => (
              <GameItem
                key={game.path}
                onClick={() => handleGameClick(game.path, "learn")}
                whileTap={{ scale: 0.98 }}
              >
                <GameInfoContainer>
                  <GameTitle>
                    <GameIcon>{getIcon(game.iconName)}</GameIcon>
                    {game.title}
                  </GameTitle>
                  <GameDesc>{game.desc}</GameDesc>
                </GameInfoContainer>
              </GameItem>
            ))}
          </GameList>
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <KidButton
              title="EXPLORE ALL"
              variant="secondary"
              onClick={() => handleExploreClick("learn")}
              width="100%"
            />
          </div>
        </RevampColumn>

        {/* PRACTICE COLUMN */}
        <RevampColumn
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ColumnHeader>
            <Gamepad2 size={28} />
            <KidoText fontSize="xl" color="primary" fontWeight={900}>
              Practice
            </KidoText>
          </ColumnHeader>
          <GameList>
            {GAME_CATEGORIES.practice.slice(0, 3).map((game) => (
              <GameItem
                key={game.path}
                onClick={() => handleGameClick(game.path, "practice")}
                whileTap={{ scale: 0.98 }}
              >
                <GameInfoContainer>
                  <GameTitle>
                    <GameIcon>{getIcon(game.iconName)}</GameIcon>
                    {game.title}
                  </GameTitle>
                  <GameDesc>{game.desc}</GameDesc>
                </GameInfoContainer>
              </GameItem>
            ))}
          </GameList>
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <KidButton
              title="EXPLORE ALL"
              variant="secondary"
              onClick={() => handleExploreClick("practice")}
              width="100%"
            />
          </div>
        </RevampColumn>

        {/* TEST COLUMN */}
        <RevampColumn
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ColumnHeader>
            <CheckCircle2 size={28} />
            <KidoText fontSize="xl" color="primary" fontWeight={900}>
              Test
            </KidoText>
          </ColumnHeader>
          <GameList>
            {GAME_CATEGORIES.test.slice(0, 3).map((game) => (
              <GameItem
                key={game.path}
                onClick={() => handleGameClick(game.path, "test")}
                whileTap={{ scale: 0.98 }}
              >
                <GameInfoContainer>
                  <GameTitle>
                    <GameIcon>{getIcon(game.iconName)}</GameIcon>
                    {game.title}
                  </GameTitle>
                  <GameDesc>{game.desc}</GameDesc>
                </GameInfoContainer>
              </GameItem>
            ))}
          </GameList>
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <KidButton
              title="EXPLORE ALL"
              variant="secondary"
              onClick={() => handleExploreClick("test")}
              width="100%"
            />
          </div>
        </RevampColumn>
      </ColumnsContainer>

      <RevampFooter>
        <Trophy size={60} color="#FFEAA7" />
        <FooterContent>
          <KidoText fontSize="2rem" color="onPrimary" fontWeight={900}>
            Achievement Program 🏆
          </KidoText>
          <KidoText fontSize="lg" color="onPrimary">
            Master any subject by reaching a 10-streak to earn your exclusive printable certificate!
            Track your progress with the stars on each activity.
          </KidoText>
        </FooterContent>
        <KidButton
          title="Start Learning! 🚀"
          variant="accent"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          minWidth="220px"
          size="lg"
        />
      </RevampFooter>
    </PageContainer>
  );
};

export default Welcome;
