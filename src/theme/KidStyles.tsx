import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// Material 3 Elevation Levels
export const elevation1 = css`
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const elevation2 = css`
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const elevation3 = css`
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const SessionStats = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 28px;
  padding: 40px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(99, 102, 241, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 6px 15px rgba(0, 0, 0, 0.05),
      0 12px 30px rgba(0, 0, 0, 0.08);
    border-color: rgba(99, 102, 241, 0.2);
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    border-radius: 20px;
  }
`;

export const StyledInput = styled.input<{ width?: string }>`
  padding: 24px 30px;
  margin: 15px 0;
  background: ${(props) => props.theme.colors.surfaceVariant};
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.textSecondary};
  border-radius: 12px 12px 0 0;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.primary};
  width: ${(props) => props.width || "200px"};
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary}80;
  }

  &:focus {
    background: ${(props) => props.theme.colors.primaryContainer};
    border-bottom: 3px solid ${(props) => props.theme.colors.primary};
    border-radius: 12px;
    transform: scale(1.02);
  }
`;

export const Tag = styled.span<{ $isActive?: boolean }>`
  color: ${(props) => (props.$isActive ? "white" : props.theme.colors.onPrimaryContainer)};
  background: ${(props) =>
    props.$isActive ? props.theme.colors.primary : props.theme.colors.primaryContainer};
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  border: 1px solid ${(props) => (props.$isActive ? "transparent" : "transparent")};
  ${(props) => (props.$isActive ? elevation2 : "none")}

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
    ${elevation2}
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
  font-size: 1.2rem;
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
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.03);
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.9);
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
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 28px;
  padding: 30px;
  box-shadow:
    0 8px 16px rgba(99, 102, 241, 0.04),
    0 16px 32px rgba(99, 102, 241, 0.06);
  border: 1px solid rgba(99, 102, 241, 0.1);
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
  min-height: 160px;
  height: 160px;
  background: white;
  border-radius: 24px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  padding: 20px;
  margin-bottom: 25px;
  box-sizing: border-box;

  @media (max-width: 992px) {
    height: auto;
    min-height: 120px;
    padding: 25px 15px;
  }
`;

export const GhostHeader = styled(TitleArea)`
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
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
  margin-bottom: 25px;

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
    min-height: 120px;
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
  font-size: 1.1rem;
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
  font-size: clamp(2rem, 6vw, 3.2rem);
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
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0;
  margin-top: 5px;
  opacity: 0.8;
  max-width: 600px;
  text-align: center;
  font-weight: 500;
`;

export const SettingsCard = styled(Card)`
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid ${(props) => props.theme.colors.primary}20;
  max-width: none;
  padding: 20px 25px;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ActivityArea = styled(Card)`
  /* This represents the primary educational content module */
`;

export const SettingsArea = styled(SettingsCard)`
  /* This represents the configuration/settings module */
`;

export const ControlBar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    margin-top: 25px;

    & > [data-testid="comp-kid-button"] {
      width: 100% !important;
      margin: 0 !important;
    }
  }
`;

export const NavControlBar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;

  @media (max-width: 480px) {
    gap: 15px;
    margin-top: 25px;
  }
`;

export const GameLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 25px 30px;
  width: 100%;
  align-items: start;

  @media (max-width: 992px) {
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

export const ConfigSection = styled.div`
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px dashed ${(props) => props.theme.colors.primary}15;
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

export const ConfigSubTitle = styled.h4`
  color: #636e72;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 0.9rem;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OptionLabel = styled.label<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  background: ${(props) => (props.$isActive ? props.theme.colors.primary + "15" : "transparent")};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 5px;
  border: 2px solid ${(props) => (props.$isActive ? props.theme.colors.primary : "transparent")};
  font-size: 0.95rem;
  color: #2d3436;

  &:hover {
    background: ${(props) => props.theme.colors.primary}08;
  }

  input {
    width: 18px;
    height: 18px;
    accent-color: ${(props) => props.theme.colors.primary};
  }
`;
