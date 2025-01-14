import styled from "styled-components";

interface KidoProps {
  fontSize?: string; // Font size for larger screens (default)
  mobileFontSize?: string; // Font size specifically for mobile
  fontWeight?: "normal" | "bold" | "lighter" | number; // Font weight
  color?: string; // Text color
  textAlign?: "left" | "center" | "right" | "justify"; // Text alignment
  margin?: string; // Margin
  padding?: string; // Padding
}

export const KidoText = styled.p<KidoProps>`
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  color: ${({ color }) => color || "#000"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};

  /* Mobile-specific styles using a media query */
  @media (max-width: 768px) {
    font-size: ${({ mobileFontSize, fontSize }) =>
      mobileFontSize || fontSize || "14px"};
  }
`;
