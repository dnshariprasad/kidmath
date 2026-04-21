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
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 768px) {
    display: block;
  }
`;
