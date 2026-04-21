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
  gap: 8px;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    color: ${(props) => props.theme.colors.secondary};
  }
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

export const MenuToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  color: ${(props) => props.theme.colors.primary};
  display: none;

  @media (max-width: 768px) {
    display: block;
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
  background: #6366f120;
  border-radius: 12px;
  color: #6366f1;
  transition: all 0.2s ease;

  &:hover {
    background: #6366f130;
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
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 8px;
  min-width: 160px;
  z-index: 1100;
  border: 1px solid rgba(0, 0, 0, 0.05);
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
  color: #2d3436;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
    color: #6366f1;
  }

  svg {
    color: #6366f1;
  }
`;
