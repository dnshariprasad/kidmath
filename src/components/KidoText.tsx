import styled from "styled-components";
import React from "react";

interface KidoProps {
  fontSize?: string;
  mobileFontSize?: string;
  fontWeight?: string | number;
  color?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  margin?: string;
  padding?: string;
  width?: string;
  children?: React.ReactNode;
}

export const KidoText = styled.p<KidoProps>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${({ fontSize, theme }) => {
    const sizeKey = fontSize as keyof typeof theme.fontSize;
    return theme.fontSize[sizeKey] || fontSize || theme.fontSize.base;
  }};
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
  color: ${({ color, theme }) => {
    const colorKey = color as keyof typeof theme.colors;
    return theme.colors[colorKey] || color || theme.colors.textPrimary;
  }};
  text-align: ${({ textAlign }) => textAlign || "center"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${({ width }) => width || "100%"};
  line-height: 1.5;
  display: block;

  @media (max-width: 768px) {
    font-size: ${({ mobileFontSize, fontSize, theme }) => {
      const mSizeKey = mobileFontSize as keyof typeof theme.fontSize;
      const sizeKey = fontSize as keyof typeof theme.fontSize;
      return (
        theme.fontSize[mSizeKey] ||
        theme.fontSize[sizeKey] ||
        mobileFontSize ||
        fontSize ||
        theme.fontSize.sm
      );
    }};
  }
`;
