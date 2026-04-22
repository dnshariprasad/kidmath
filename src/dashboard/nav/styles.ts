import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.textPrimary};
  box-shadow: 0 2px 10px ${(props) => props.theme.colors.shadow};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

export const AppName = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.8rem;
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 10px;
  letter-spacing: -1px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const NavLeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoIconContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  padding: 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.primary}40;
`;

export const AppNameText = styled.span`
  font-size: 1.8rem;
  letter-spacing: -1px;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 600;
  color: ${(props) => props.theme.colors.textSecondary};

  @media (max-width: 768px) {
    font-size: 0.9rem;
    gap: 8px;
  }
`;

export const MenuToggleButton = styled.button<{ $isVisible?: boolean }>`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  color: ${(props) => props.theme.colors.primary};
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isVisible ? "block" : "none")};
  }
`;

export const MoreMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const IconButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: ${(props) => props.theme.colors.primary}20;
  border-radius: 12px;
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary}30;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  background: ${(props) => props.theme.colors.surface};
  border-radius: 16px;
  box-shadow: 0 10px 25px ${(props) => props.theme.colors.shadow};
  padding: 8px;
  min-width: 160px;
  z-index: 1100;
  border: 1px solid ${(props) => props.theme.colors.primary}10;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.surfaceVariant};
    color: ${(props) => props.theme.colors.primary};
  }

  svg {
    color: ${(props) => props.theme.colors.primary};
  }
`;
export const ArrowRight = styled.div`
  margin-left: auto;
  opacity: 0.5;
  display: flex;
  align-items: center;
`;

export const BackItem = styled(DropdownItem)`
  border-bottom: 1px solid ${(props) => props.theme.colors.primary}10;
  margin-bottom: 5px;
`;
