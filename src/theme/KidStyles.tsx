import styled, { css } from "styled-components";

// Material 3 Elevation Levels
export const elevation1 = css`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const elevation2 = css`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const elevation3 = css`
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

export const SessionStats = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 35px; /* Height of one row of stars (approx 1.8rem) + margins */
  width: 100%;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 28px;
  padding: 40px;
  box-shadow: 
    0 10px 20px rgba(99, 102, 241, 0.04),
    0 20px 40px rgba(99, 102, 241, 0.06),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  width: 100%;
  max-width: 800px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(99, 102, 241, 0.15);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 
      0 15px 30px rgba(99, 102, 241, 0.08),
      0 30px 60px rgba(99, 102, 241, 0.12);
    border-color: rgba(99, 102, 241, 0.3);
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

export const Tag = styled.span`
  color: ${(props) => props.theme.colors.onPrimaryContainer};
  background: ${(props) => props.theme.colors.primaryContainer};
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
  border: 1px solid transparent;

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
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 25px;
  padding: 0 16px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  font-size: 0.85rem;
  opacity: 0.6;
`;

export const TagList = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const PageContainer = styled.div`
  padding: 24px 30px;
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

export const HeaderArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Precisely calculated to accommodate title and 1-2 rows of stats/stars */
  min-height: 110px;
  justify-content: flex-start;
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;
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
  background: rgba(255, 255, 255, 0.85);
  border: 3px solid ${(props) => props.theme.colors.primary}25;
  max-width: none;
  padding: 32px 20px;
  
  &:hover {
    transform: translateY(-5px) scale(1.005);
  }
`;

export const ControlBar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
`;
