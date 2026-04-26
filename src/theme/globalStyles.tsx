import styled from "styled-components";
import { motion } from "framer-motion";
import { shimmerAnimation } from "./styleConstants";
export const SkeletonBase = styled.div`
  background: ${(props) => props.theme.colors.surfaceVariant}40;
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.surfaceVariant}40 0%,
    ${(props) => props.theme.colors.surfaceVariant}80 50%,
    ${(props) => props.theme.colors.surfaceVariant}40 100%
  );
  background-size: 200% 100%;
  animation: ${shimmerAnimation} 1.5s infinite;
  border-radius: 12px;
`;

export const SessionStats = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.surface};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 28px;
  padding: 30px 40px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: none;
  transition: all 0.3s ease;
  border: 1px solid ${(props) => props.theme.colors.primary}15;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.primary}30;
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
    border-radius: 20px;
  }
`;

export const StyledInput = styled.input.attrs({
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      e.target.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  },
})<{ width?: string }>`
  padding: 10px 20px;
  margin: 15px 0;
  background: ${(props) => props.theme.colors.surface};
  border: 3px solid ${(props) => props.theme.colors.primary}15;
  border-radius: 16px;
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 800;
  font-family: ${(props) => props.theme.fonts.primary};
  width: ${(props) => props.width || "120px"};
  height: 80px;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary}40;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    height: 64px;
    font-size: ${(props) => props.theme.fontSize.lg};
    width: ${(props) => props.width || "100px"};
  }
`;

export const Tag = styled.span<{
  $isActive?: boolean;
  $bg?: string;
  $color?: string;
  $borderColor?: string;
}>`
  color: ${(props) =>
    props.$color || (props.$isActive ? "white" : props.theme.colors.textSecondary)};
  background: ${(props) =>
    props.$bg ||
    (props.$isActive ? props.theme.colors.primary : props.theme.colors.surfaceVariant)};
  padding: 10px 18px;
  border-radius: 12px;
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  border: 1px solid
    ${(props) => (props.$isActive ? props.theme.colors.primary : props.theme.colors.primary + "10")};

  &:hover {
    background: ${(props) =>
      props.$isActive ? props.theme.colors.primary : props.theme.colors.primary + "15"};
    color: ${(props) => (props.$isActive ? "white" : props.theme.colors.primary)};
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const SidebarTitle = styled.h4`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.2px;
  font-size: ${(props) => props.theme.fontSize.md};
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 60px; /* Matches the visual height of the PageTitle line */
  padding-top: 5px;
`;

export const TagList = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const PageContainer = styled.div`
  padding: 0 30px 24px; /* Standardized side/bottom padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export const CenteredContainerVertical = styled.div<{ padding?: string }>`
  padding: ${(props) => props.padding || "20px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const CenteredContainerVerticalDynamic = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
  max-width: 400px;
`;

export const ListItem = styled.li`
  padding: 16px 24px;
  margin-bottom: 12px;
  background: ${(props) => props.theme.colors.surfaceVariant}CC;
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.primary}15;
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.03);
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(5px);
    background: ${(props) => props.theme.colors.surface};
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.06);
  }
`;

export const ContainerH = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const ContainerV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: ${(props) => props.theme.colors.surface};
  backdrop-filter: blur(10px);
  border-radius: 28px;
  padding: 30px;
  box-shadow:
    0 8px 16px rgba(99, 102, 241, 0.04),
    0 16px 32px rgba(99, 102, 241, 0.06);
  border: 1px solid ${(props) => props.theme.colors.primary}15;
`;

export const CenteredContainerHorizontally = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TitleArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  height: 120px;
  background: ${(props) => props.theme.colors.surface};
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors.primary}15;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  padding: 20px;
  margin-bottom: 0;
  box-sizing: border-box;

  @media (max-width: 992px) {
    height: auto;
    min-height: 80px;
    padding: 10px 15px;
    margin-bottom: 0;
  }
`;

export const GhostHeader = styled(TitleArea)`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.primary}CC 100%
  );
  border: none;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  margin-bottom: 0;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
    animation: rotate 10s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 992px) {
    order: 10;
    min-height: 100px;
    height: auto;
    margin-top: 20px;
  }
`;

export const MagicButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSize.md};
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
  }
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 0;
  gap: 8px;
`;

export const PageTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 15px;
  letter-spacing: -0.5px;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 6px;
    background: ${(props) => props.theme.colors.primary}25;
    border-radius: 10px;
  }
`;

export const PageSubtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0;
  margin-top: 5px;
  opacity: 0.8;
  max-width: 600px;
  text-align: center;
  font-weight: 500;
`;

export const SettingsCard = styled(Card)`
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.primary}20;
  max-width: none;
  padding: 15px 25px;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ActivityArea = styled(Card)`
  /* This represents the primary educational content module */
`;

export const GameActivityArea = styled(ActivityArea)`
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  gap: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 10px 15px;
    gap: 10px;
  }
`;

export const StarSpan = styled(motion.span)`
  font-size: ${(props) => props.theme.fontSize.lg};
`;

export const NumberedStar = styled(StarSpan)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const StarNumber = styled.span`
  position: absolute;
  font-size: 0.7rem;
  font-weight: 900;
  color: #1e293b;
  margin-top: 2px;
`;

export const StarEmoji = styled.span`
  font-size: 1.5rem;
`;

export const PlusSign = styled.span`
  margin-left: 5px;
  font-weight: 800;
  color: #ffd700;
`;

export const FeedbackWrapper = styled(motion.div)`
  margin-top: 15px;
`;

export const SettingsArea = styled(SettingsCard)`
  /* This represents the configuration/settings module */
`;

export const SettingsAreaStyled = styled(SettingsArea)`
  /* This represents the configuration/settings module */
`;

export const ControlBar = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const NavControlBar = styled(ControlBar)`
  margin-top: 15px;
`;

export const GameLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px 25px;
  width: 100%;
  align-items: start;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const MainSide = styled.div`
  display: contents;
`;

export const SidebarSide = styled.div`
  display: contents;
`;

export const ConfigSection = styled.div<{ $disabled?: boolean }>`
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px dashed ${(props) => props.theme.colors.primary}15;
  width: 100%;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};

  &:last-child {
    border-bottom: none;
  }
`;

export const ConfigSubTitle = styled.h4`
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSize.sm};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
  width: auto;
  margin: 10px 2px 0;
  box-sizing: border-box;
`;

export const OptionLabel = styled.label<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: ${(props) => (props.$isActive ? props.theme.colors.primary + "15" : "transparent")};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid ${(props) => (props.$isActive ? props.theme.colors.primary : "transparent")};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.textPrimary};

  &:hover {
    background: ${(props) => props.theme.colors.primary}08;
  }

  input {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${(props) => props.theme.colors.primary}40;
    border-radius: 50%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    background: ${(props) => props.theme.colors.surface};
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background: ${(props) => props.theme.colors.primary};
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 4px solid ${(props) => props.theme.colors.surface};
      box-sizing: border-box;
    }

    &:checked {
      border-color: ${(props) => props.theme.colors.primary};
    }

    &:checked::after {
      transform: scale(1);
    }
  }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  background: transparent;
`;

export const ActionsMenu = styled(motion.div)`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: ${(props) => props.theme.colors.surface};
  border: 2px solid ${(props) => props.theme.colors.primary}20;
  border-radius: 24px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  z-index: 100;
  min-width: 220px;
  overflow: hidden;
`;

export const ActionMenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: ${(props) => props.theme.colors.surface};
  border-radius: 12px;
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary}15;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const CheckboxContainer = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 700;
  font-size: 1rem;
  padding: 8px 12px;
  background: ${(props) => props.theme.colors.surface};
  border: 2px solid ${(props) => props.theme.colors.primary}15;
  border-radius: 16px;
  transition: all 0.2s ease;
  margin-top: 5px;

  &:hover {
    border-color: ${(props) =>
      props.$disabled ? props.theme.colors.border : props.theme.colors.primary};
  }
`;

export const CheckboxInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border: 2px solid ${(props) => props.theme.colors.primary}40;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.surface};
  cursor: inherit;
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:checked {
    background: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
  }

  &::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: white;
    font-size: 14px;
    font-weight: 900;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:checked::after {
    transform: translate(-50%, -50%) scale(1);
  }

  &:focus {
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary}30;
  }
`;

export const InfoButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textSecondary};
  cursor: help;
  transition: all 0.2s ease;
  margin-left: 6px;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover::after {
    content: attr(data-info);
    position: absolute;
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%);
    background: ${(props) => props.theme.colors.surface};
    color: ${(props) => props.theme.colors.textPrimary};
    padding: 8px 12px;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 600;
    white-space: nowrap;
    z-index: 1000;
    pointer-events: none;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    border: 1px solid ${(props) => props.theme.colors.border};
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;
