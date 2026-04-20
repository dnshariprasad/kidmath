import styled from "styled-components";

export const MenuContainer = styled.div<{ $isOpen?: boolean }>`
  flex: 1;
  min-width: 280px;
  background-color: #ffffff;
  padding: 40px 16px;
  box-sizing: border-box;
  height: calc(100vh - 70px);
  position: sticky;
  top: 70px;
  overflow-y: auto;
  transition: all 0.3s ease;
  border-right: 1px solid #f1f5f9;
  z-index: 10;

  @media (max-width: 768px) {
    position: fixed;
    left: ${(props) => (props.$isOpen ? "0" : "-100%")};
    top: 70px;
    width: 300px;
    height: calc(100vh - 70px);
    box-shadow: 10px 0 30px rgba(0,0,0,0.05);
    background-color: #ffffff;
  }
`;

export const MenuSection = styled.div`
  margin-bottom: 16px;
`;

export const MenuHeading = styled.div<{ $isActive?: boolean; $color?: string }>`
  color: ${(props) => (props.$isActive ? props.$color || props.theme.colors.primary : props.theme.colors.textPrimary)};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  padding: 12px 16px;
  background-color: ${(props) => (props.$isActive ? (props.$color || props.theme.colors.primary) + "10" : "transparent")};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  border: 1px solid ${(props) => (props.$isActive ? (props.$color || props.theme.colors.primary) + "30" : "transparent")};

  &:hover {
    background-color: #f8fafc;
  }

  .icon-wrapper {
    margin-right: 12px;
    display: flex;
    align-items: center;
  }

  .title-wrapper {
    flex: 1;
  }

  span.arrow {
    transition: transform 0.3s ease;
    font-size: 0.7rem;
    opacity: 0.3;
  }
`;

export const MenuList = styled.div<{ isVisible: boolean }>`
  padding: 4px 8px 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
  max-height: ${(props) => (props.isVisible ? "500px" : "0")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;
`;

export const MenuItem = styled.div<{ $active?: boolean; $color?: string }>`
  padding: 10px 16px;
  background-color: ${(props) => (props.$active ? (props.$color || "#6366F1") + "10" : "transparent")};
  border-radius: 8px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 600;
  color: ${(props) => (props.$active ? props.$color || props.theme.colors.primary : props.theme.colors.textSecondary)};
  transition: all 0.2s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${(props) => (props.$active ? props.$color || props.theme.colors.primary : "transparent")};
    margin-right: 12px;
    transition: all 0.2s ease;
  }

  &:hover {
    background-color: #f8fafc;
    color: ${(props) => props.$color || props.theme.colors.primary};
  }
`;
