import styled from "styled-components";
import React from "react";

interface KidoProps {
  fontSize?: string;
  mobileFontSize?: string;
  fontWeight?: "normal" | "bold" | "lighter" | number;
  color?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  margin?: string;
  padding?: string;
  width?: string;
  children?: React.ReactNode;
}

export const KidoText = styled.p<KidoProps>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${({ fontSize }) => fontSize || "1.1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
  color: ${({ color, theme }) => theme.colors[color as keyof typeof theme.colors] || color || theme.colors.textPrimary};
  text-align: ${({ textAlign }) => textAlign || "center"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${({ width }) => width || "100%"};
  line-height: 1.5;
  display: block;

  @media (max-width: 768px) {
    font-size: ${({ mobileFontSize, fontSize }) =>
      mobileFontSize || fontSize || "1rem"};
  }
`;
