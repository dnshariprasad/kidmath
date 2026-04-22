import { useNavigate, useLocation } from "react-router-dom";
import { GAME_CATEGORIES, GameMode } from "../../constants/gameData";
import {
  MenuContainer,
  MenuHeading,
  MenuItem,
  MenuList,
  MenuSection,
  MenuHeadingWrapper,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { closeMobileMenu } from "../../store/slice/AlphabetSlice";
import * as LucideIcons from "lucide-react";

const MainMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state: RootState) => state.alphabet.isMobileMenuOpen);
  const currentMode = useSelector((state: RootState) => state.alphabet.currentMode);

  const handleItemClick = (path: string) => {
    navigate(path);
    dispatch(closeMobileMenu());
  };

  const renderIcon = (iconName: string, color: string, isActive: boolean) => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.ElementType;
    if (!IconComponent) return null;
    return <IconComponent size={22} color={isActive ? "white" : color} strokeWidth={2.5} />;
  };

  const modes: { id: GameMode; label: string; icon: string; color: string }[] = [
    { id: "learn", label: "Learn", icon: "BookOpen", color: "#6366F1" },
    { id: "practice", label: "Practice", icon: "Gamepad2", color: "#6366F1" },
    { id: "test", label: "Test", icon: "CheckCircle2", color: "#6366F1" },
  ];

  // If we have a current mode, only show that mode's games. Otherwise show all.
  const visibleModes = currentMode ? modes.filter((m) => m.id === currentMode) : modes;

  return (
    <MenuContainer data-testid="layout-sidebar" $isOpen={isMobileMenuOpen}>
      {visibleModes.map((mode) => {
        const games = GAME_CATEGORIES[mode.id];

        // Group games by subject
        const groupedBySubject = games.reduce(
          (acc, game) => {
            if (!acc[game.subject]) acc[game.subject] = [];
            acc[game.subject].push(game);
            return acc;
          },
          {} as Record<string, typeof games>,
        );

        const hasActiveSub = games.some((game) => location.pathname === game.path);

        return (
          <MenuSection key={mode.id}>
            <MenuHeading $isActive={hasActiveSub} $color={mode.color}>
              <MenuHeadingWrapper>
                <span className="icon-wrapper">
                  {renderIcon(mode.icon, mode.color, hasActiveSub)}
                </span>
                <span className="title-wrapper">{mode.label} Mode</span>
              </MenuHeadingWrapper>
            </MenuHeading>
            <MenuList isVisible={true}>
              {Object.entries(groupedBySubject).map(([subject, subjectGames]) => (
                <div key={subject} style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      padding: "8px 24px",
                      fontSize: "11px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      color: mode.color,
                      opacity: 0.6,
                      letterSpacing: "1px",
                    }}
                  >
                    {subject}
                  </div>
                  {subjectGames.map((game) => (
                    <MenuItem
                      key={game.id}
                      onClick={() => handleItemClick(game.path)}
                      $active={location.pathname === game.path}
                      $color={mode.color}
                    >
                      {game.title}
                    </MenuItem>
                  ))}
                </div>
              ))}
            </MenuList>
          </MenuSection>
        );
      })}
    </MenuContainer>
  );
};

export default MainMenu;
