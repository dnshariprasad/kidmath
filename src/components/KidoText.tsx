import styled from "styled-components";
import React from "react";

interface KidoProps {
  $fontSize?: string;
  $mobileFontSize?: string;
  $fontWeight?: string | number;
  $color?: string;
  $textAlign?: "left" | "center" | "right" | "justify";
  $margin?: string;
  $padding?: string;
  $width?: string;
  // Legacy props support to avoid breaking existing code immediately
  fontSize?: string;
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
  font-size: ${({ $fontSize, fontSize, theme }) => {
    const size = $fontSize || fontSize;
    const sizeKey = size as keyof typeof theme.fontSize;
    return theme.fontSize[sizeKey] || size || theme.fontSize.base;
  }};
  font-weight: ${({ $fontWeight, fontWeight }) => $fontWeight || fontWeight || "700"};
  color: ${({ $color, color, theme }) => {
    const col = $color || color;
    const colorKey = col as keyof typeof theme.colors;
    return theme.colors[colorKey] || col || theme.colors.textPrimary;
  }};
  text-align: ${({ $textAlign, textAlign }) => $textAlign || textAlign || "center"};
  margin: ${({ $margin, margin }) => $margin || margin || "0"};
  padding: ${({ $padding, padding }) => $padding || padding || "0"};
  width: ${({ $width, width }) => $width || width || "100%"};
  line-height: 1.5;
  display: block;

  @media (max-width: 768px) {
    font-size: ${({ $mobileFontSize, $fontSize, fontSize, theme }) => {
      const size = $fontSize || fontSize;
      const mSize = $mobileFontSize;
      const mSizeKey = mSize as keyof typeof theme.fontSize;
      const sizeKey = size as keyof typeof theme.fontSize;
      return (
        theme.fontSize[mSizeKey] || theme.fontSize[sizeKey] || mSize || size || theme.fontSize.sm
      );
    }};
  }
`;
