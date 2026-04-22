import styled from "styled-components";

export const MenuContainer = styled.div<{ $isOpen?: boolean }>`
  flex: 0 0 300px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.surface};
  padding: 16px;
  box-sizing: border-box;
  height: calc(100% - 24px);
  margin-left: 24px;
  margin-bottom: 24px;
  position: relative;
  overflow-y: auto;
  transition: all 0.3s ease;
  border-radius: 32px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  border: 1px solid ${(props) => props.theme.colors.primary}15;
  z-index: 10;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary}20;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    position: fixed;
    left: ${(props) => (props.$isOpen ? "0" : "-100%")};
    top: 70px;
    width: 280px;
    height: calc(100vh - 70px);
    margin: 0;
    box-shadow: 10px 0 30px rgba(0, 0, 0, 0.1);
    border-radius: 0;
    z-index: 1000;
  }
`;

export const MenuSection = styled.div`
  margin-bottom: 16px;
`;

export const MenuHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Arrow = styled.span<{ $isExpanded: boolean }>`
  transition: transform 0.3s ease;
  font-size: 0.7rem;
  opacity: 0.3;
  transform: ${(props) => (props.$isExpanded ? "rotate(180deg)" : "rotate(0)")};
`;

export const MenuHeading = styled.div<{ $isActive?: boolean; $color?: string }>`
  color: ${(props) => (props.$isActive ? "#ffffff" : props.theme.colors.textPrimary)};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  padding: 12px 16px;
  background-color: ${(props) =>
    props.$isActive ? props.$color || props.theme.colors.primary : "transparent"};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  border: 1px solid
    ${(props) => (props.$isActive ? props.$color || props.theme.colors.primary : "transparent")};
  box-shadow: ${(props) =>
    props.$isActive ? `0 4px 12px ${props.$color || props.theme.colors.primary}40` : "none"};

  &:hover {
    background-color: ${(props) =>
      props.$isActive
        ? props.$color || props.theme.colors.primary
        : props.theme.colors.surfaceVariant};
    filter: ${(props) => (props.$isActive ? "brightness(0.95)" : "none")};
    transform: ${(props) => (props.$isActive ? "none" : "translateX(4px)")};
  }

  .icon-wrapper {
    margin-right: 12px;
    display: flex;
    align-items: center;
  }

  .title-wrapper {
    flex: 1;
  }

  ${Arrow} {
    opacity: ${(props) => (props.$isActive ? "0.9" : "0.3")};
    color: ${(props) => (props.$isActive ? "#ffffff" : "inherit")};
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
  background-color: ${(props) =>
    props.$active ? (props.$color || props.theme.colors.primary) + "15" : "transparent"};
  border-radius: 8px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 600;
  color: ${(props) =>
    props.$active ? props.$color || props.theme.colors.primary : props.theme.colors.textSecondary};
  transition: all 0.2s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.$active ? props.$color || props.theme.colors.primary : "transparent"};
    margin-right: 12px;
    transition: all 0.2s ease;
  }

  &:hover {
    background-color: ${(props) =>
      props.$active
        ? (props.$color || props.theme.colors.primary) + "20"
        : props.theme.colors.surfaceVariant};
    color: ${(props) => props.$color || props.theme.colors.primary};
    transform: translateX(4px);
  }
`;
