import styled from "styled-components";
import { motion } from "framer-motion";
import { Card } from "../../theme/globalStyles";
import { KidoText } from "../../components/KidoText";

export const ProgressBarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${(props) => props.theme.colors.background}EE;
  backdrop-filter: blur(8px);
  padding: 15px 0;
  margin-bottom: 20px;
  width: 100%;
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 8px;
  background: ${(props) => props.theme.colors.primary}15;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
`;

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

export const QuestionCard = styled(Card)<{ $type: string }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px 30px 35px;
  position: relative;
  background: ${(props) => props.theme.colors.surface};
  border-radius: 32px;
  border: 1px solid ${(props) => props.theme.colors.primary}15;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      ${(props) => props.theme.colors.primary}10 1px,
      transparent 1px
    );
    background-size: 20px 20px;
    opacity: 0.3;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 70px 20px 30px;
    gap: 20px;
    border-radius: 24px;
  }
`;

export const CardProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${(props) => props.theme.colors.primary}15;
`;

export const CardProgressFill = styled(motion.div)`
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
`;

export const QuestionNumber = styled.div`
  position: absolute;
  top: 25px;
  left: 30px;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.textSecondary};
  opacity: 0.5;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.primary};

  @media (max-width: 600px) {
    top: 20px;
    left: 20px;
    font-size: 0.65rem;
  }
`;

export const SubjectBadge = styled.div<{ $type: string }>`
  position: absolute;
  top: 25px;
  right: 30px;
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 6px 16px;
  border-radius: 12px;
  font-family: ${(props) => props.theme.fonts.primary};
  background: ${(props) => {
    switch (props.$type) {
      case "math":
        return (props.theme.colors.math || props.theme.colors.primary) + "15";
      case "spelling":
      case "missing_letter":
        return (props.theme.colors.english || props.theme.colors.primary) + "15";
      case "hindi":
        return (props.theme.colors.hindi || props.theme.colors.primary) + "15";
      case "comparison":
        return (props.theme.colors.math || props.theme.colors.primary) + "15";
      default:
        return props.theme.colors.primary + "15";
    }
  }};
  color: ${(props) => {
    switch (props.$type) {
      case "math":
        return props.theme.colors.math || props.theme.colors.primary;
      case "spelling":
      case "missing_letter":
        return props.theme.colors.english || props.theme.colors.primary;
      case "hindi":
        return props.theme.colors.hindi || props.theme.colors.primary;
      case "comparison":
        return props.theme.colors.math || props.theme.colors.primary;
      default:
        return props.theme.colors.primary;
    }
  }};

  @media (max-width: 600px) {
    top: 20px;
    right: 20px;
    font-size: 0.65rem;
    padding: 4px 12px;
  }
`;

export const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`;

export const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`;

export const BigDisplay = styled.div<{ $fontSize?: string }>`
  font-size: ${(props) => props.$fontSize || "clamp(2rem, 5vw, 3.5rem)"};
  font-weight: 900;
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  letter-spacing: 2px;
  font-family: ${(props) => props.theme.fonts.primary};

  @media (max-width: 600px) {
    font-size: ${(props) => (props.$fontSize ? "1.5rem" : "2rem")};
    letter-spacing: 2px;
  }
`;

export const LogicDisplay = styled(BigDisplay)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`;

export const ComparisonGrid = styled.div<{ $isLong?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.$isLong ? "1fr" : "repeat(2, 1fr)")};
  gap: 20px;
  width: 100%;
  max-width: ${(props) => (props.$isLong ? "600px" : "800px")};
  margin: 20px auto 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 12px;
  }
`;

export const ChoiceCard = styled(motion.div)<{ $selected: boolean; $color?: string }>`
  background: ${(props) =>
    props.$selected ? props.theme.colors.primary : props.theme.colors.primary + "10"};
  color: ${(props) => (props.$selected ? "white" : props.theme.colors.primary)};
  padding: 12px 24px;
  border-radius: 24px;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 800;
  border: ${(props) => (props.$selected ? "none" : `2px solid ${props.theme.colors.primary}40`)};
  cursor: pointer;
  flex: 1;
  min-width: 140px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  line-height: 1.2;
  font-family: ${(props) => props.theme.fonts.primary};
  box-shadow: ${(props) => (props.$selected ? props.theme.shadows.md : "none")};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${(props) =>
      props.$selected ? props.theme.colors.primary : props.theme.colors.primary + "15"};
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.lg};
  }

  @media (max-width: 576px) {
    height: 64px;
    font-size: 1.5rem;
    min-width: 0;
    width: 100%;
  }
`;

export const SubmitSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

export const ResultsOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${(props) => props.theme.colors.background}FA;
  backdrop-filter: blur(15px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  text-align: center;
  overflow-y: auto;
`;

export const ReviewList = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px 0;
  max-height: 400px;
  overflow-y: auto;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary}30;
    border-radius: 10px;
  }
`;

export const ReviewItem = styled.div<{ $correct: boolean }>`
  background: ${(props) =>
    props.$correct ? props.theme.colors.success + "08" : props.theme.colors.warning + "08"};
  border: 1px solid
    ${(props) =>
      props.$correct ? props.theme.colors.success + "20" : props.theme.colors.warning + "20"};
  padding: 24px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

export const CorrectionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`;
export const IconWrapper = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;
export const PromptText = styled(KidoText)`
  text-align: center;
`;

export const SpeakContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const CenterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ResultBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.surface};
  padding: 60px;
  border-radius: 48px;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
  border: 1px solid ${(props) => props.theme.colors.primary}10;
  max-width: 800px;
  width: 90%;
  position: relative;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      ${(props) => props.theme.colors.primary}05 0%,
      transparent 70%
    );
    border-radius: inherit;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 40px 20px;
  }
`;

export const GradeBadge = styled(motion.div)<{ $score: number }>`
  padding: 12px 30px;
  border-radius: 100px;
  background: ${(props) =>
    props.$score >= 8 ? props.theme.colors.gold : props.theme.colors.slate}20;
  color: ${(props) =>
    props.$score >= 8 ? props.theme.colors.goldDark : props.theme.colors.slateDark};
  font-weight: 900;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
  border: 2px solid
    ${(props) => (props.$score >= 8 ? props.theme.colors.gold : props.theme.colors.slate)}40;
  font-family: ${(props) => props.theme.fonts.primary};
`;

export const ReviewHeader = styled(KidoText)`
  margin-bottom: 10px;
`;

export const ScoreValue = styled(KidoText)`
  margin: 15px 0;
`;

export const FeedbackText = styled(KidoText)`
  margin-bottom: 10px;
`;

export const SubFeedbackText = styled(KidoText)`
  margin-bottom: 25px;
  max-width: 500px;
`;

export const ActionsGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;

    & > button {
      width: 100%;
    }
  }
`;

export const ReviewOverlayBox = styled(motion.div)`
  width: 95%;
  max-width: 900px;
  background: ${(props) => props.theme.colors.surface};
  padding: 50px;
  border-radius: 48px;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    padding: 30px 15px;
  }
`;

export const ReviewSubHeader = styled(KidoText)`
  margin-bottom: 20px;
`;

export const ReviewRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InnerTrack = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const CarouselSlide = styled(motion.div)`
  width: 100%;
`;

export const CertificateWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`;

export const InstructionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }
`;

export const IconBox = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  flex-shrink: 0;
`;

export const InstructionCard = styled(motion.div)`
  padding: 40px;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.primary}15;
  border-radius: 48px;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle at center,
      ${(props) => props.theme.colors.primary}08 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 30px 20px;
    border-radius: 32px;
  }
`;

export const InstructionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin: 40px 0;
  text-align: left;
`;

export const SetupGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const InstructionItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: ${(props) => props.theme.colors.primary}05;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors.primary}10;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary}08;
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.primary}25;
  }

  svg {
    color: ${(props) => props.theme.colors.primary};
    flex-shrink: 0;
  }

  span {
    color: ${(props) => props.theme.colors.textSecondary};
    font-weight: 700;
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

export const SetupSection = styled.div<{ $minimal?: boolean }>`
  margin-top: ${(props) => (props.$minimal ? "0" : "50px")};
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: ${(props) => (props.$minimal ? "0" : "40px")};
  border-top: ${(props) =>
    props.$minimal ? "none" : `2px dashed ${props.theme.colors.primary}15`};
  width: 100%;
`;

export const SettingsTitle = styled(KidoText)`
  margin-bottom: -15px;
  text-align: center;
  opacity: 0.6;
  letter-spacing: 2px;
`;

export const SubjectGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const SubjectChip = styled(motion.button)<{ $active: boolean; $color: string }>`
  padding: 12px 24px;
  border-radius: 100px;
  background: ${(props) => (props.$active ? props.$color : props.theme.colors.surface)};
  color: ${(props) => (props.$active ? "white" : props.theme.colors.textSecondary)};
  border: 2px solid ${(props) => (props.$active ? props.$color : props.theme.colors.primary + "20")};
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  font-family: ${(props) => props.theme.fonts.primary};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.md};
  }
`;

export const OperationToggleGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const OperationChip = styled(motion.button)<{ $active: boolean }>`
  height: 50px;
  padding: 0 24px;
  border-radius: 16px;
  background: ${(props) =>
    props.$active ? props.theme.colors.primary : props.theme.colors.surface};
  color: ${(props) => (props.$active ? "white" : props.theme.colors.primary)};
  border: 2px solid
    ${(props) => (props.$active ? props.theme.colors.primary : props.theme.colors.primary + "30")};
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.2s ease;
  font-family: ${(props) => props.theme.fonts.primary};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.md};
  }

  span:first-child {
    font-size: 1.6rem;
    font-weight: 900;
  }
`;
