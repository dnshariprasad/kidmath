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
  max-width: 900px;
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
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  margin-top: 20px;

  overflow: hidden;

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

export const BigDisplay = styled.div`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  letter-spacing: 4px;
  font-family: ${(props) => props.theme.fonts.secondary};

  @media (max-width: 600px) {
    font-size: 2rem;
    letter-spacing: 2px;
  }
`;

export const ComparisonGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 20px;
    flex-direction: column;
  }
`;

export const ChoiceCard = styled(motion.div)<{ $selected: boolean; $color?: string }>`
  background: ${(props) =>
    props.$selected
      ? props.$color || props.theme.colors.primary
      : props.theme.colors.surfaceVariant + "30"};
  color: ${(props) => (props.$selected ? "white" : props.theme.colors.textPrimary)};
  padding: 20px 40px;
  border-radius: 20px;
  font-size: 2rem;
  font-weight: 900;
  border: 3px solid
    ${(props) => (props.$selected ? props.$color || props.theme.colors.primary : "transparent")};
  cursor: pointer;
  min-width: 150px;
  text-align: center;
  box-shadow: ${(props) => (props.$selected ? props.theme.shadows.md : "none")};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$selected
        ? props.$color || props.theme.colors.primary
        : props.theme.colors.surfaceVariant + "60"};
    transform: translateY(-4px);
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
  justify-content: center;
  padding: 40px;
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
    props.$correct ? props.theme.colors.success + "10" : props.theme.colors.warning + "10"};
  border: 1px solid
    ${(props) =>
      props.$correct ? props.theme.colors.success + "30" : props.theme.colors.warning + "30"};
  padding: 15px 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

export const CorrectionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`;

export const IconWrapper = styled.div`
  color: #6366f1;
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
`;

export const ReviewHeader = styled(KidoText)`
  margin-bottom: 10px;
`;

export const ScoreValue = styled(KidoText)`
  margin: 30px 0;
`;

export const FeedbackText = styled(KidoText)`
  margin-bottom: 10px;
`;

export const SubFeedbackText = styled(KidoText)`
  margin-bottom: 50px;
  max-width: 500px;
`;

export const ActionsGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ReviewOverlayBox = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
