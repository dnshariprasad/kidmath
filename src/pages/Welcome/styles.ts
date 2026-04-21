import styled from "styled-components";
import { motion } from "framer-motion";
import { Card } from "../../theme/globalStyles";

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 15px;
`;

export const CategoryCard = styled(motion.div)<{ $color: string }>`
  background: ${(props) => props.theme.colors.surface};
  padding: 24px;
  border-radius: 24px;
  box-shadow: ${(props) => props.theme.colors.shadow};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.primary}10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: ${(props) => props.$color}40;
    transform: translateY(-5px);
    box-shadow: 0 12px 30px ${(props) => props.$color}15;
  }
`;

export const IconWrapper = styled.div<{ $color: string }>`
  background: ${(props) => props.$color}15;
  color: ${(props) => props.$color};
  padding: 16px;
  border-radius: 20px;
  margin-bottom: 16px;
`;

export const WavingEmoji = styled(motion.span)`
  display: inline-block;
`;

export const CategoryTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.lg};
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const CategoryDesc = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 20px;
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const PromoCard = styled(Card)`
  margin-top: 40px;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.primary}CC 100%
  );
  color: white;
  padding: 30px 20px;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  border: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px ${(props) => props.theme.colors.primary}40;
  }
`;

export const PromoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const PromoTitle = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  margin: 0;
`;

export const PromoDesc = styled.p`
  font-size: ${(props) => props.theme.fontSize.base};
  margin: 0 auto 25px;
  opacity: 0.9;
  max-width: 500px;
  font-weight: 500;
`;

export const PromoActionArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const WhiteKidButtonWrapper = styled.div`
  & > [data-testid="comp-kid-button"] {
    background: ${(props) => props.theme.colors.onPrimary} !important;
    color: ${(props) => props.theme.colors.primary} !important;
    border: none !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
  }
`;
