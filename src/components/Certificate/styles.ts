import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 40px 20px; /* Increased vertical padding to avoid edge-to-edge filling */
`;

export const CertificateContainer = styled(motion.div)`
  background: ${(props) => (props.theme.theme === "dark" ? "#1e293b" : "#ffffff")};
  width: 95%;
  max-width: 700px;
  max-height: 95vh;
  padding: 24px;
  border-radius: 32px;
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.primary}15;

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 24px;
    width: 98%;
  }

  /* Hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CertificateBorder = styled.div`
  width: 100%;
  border: 14px solid #ffd700; /* Gold */
  border-radius: 32px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: radial-gradient(circle, #ffffff 0%, #fffdf0 100%);
  position: relative;
  overflow: hidden;
  box-shadow:
    0 0 0 4px #ffd70040,
    inset 0 0 100px #ffd70010;

  @media (max-width: 480px) {
    padding: 60px 20px 40px;
    border-width: 10px;
    border-radius: 20px;
  }
`;

export const Sunburst = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    #ffd70015 20deg,
    transparent 40deg,
    #ffd70015 60deg,
    transparent 80deg,
    #ffd70015 100deg,
    transparent 120deg,
    #ffd70015 140deg,
    transparent 160deg,
    #ffd70015 180deg,
    transparent 200deg,
    #ffd70015 220deg,
    transparent 240deg,
    #ffd70015 260deg,
    transparent 280deg,
    #ffd70015 300deg,
    transparent 320deg,
    #ffd70015 340deg,
    transparent 360deg
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  animation: rotate 20s linear infinite;

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export const CertificateHeader = styled.h1`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 2.5rem;
  color: #f59e0b; /* Bright Orange/Gold */
  text-transform: uppercase;
  z-index: 1;
  font-weight: 900;
  text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  margin: 0;
`;

export const CertificateSubHeader = styled.h2`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.2rem;
  color: #475569 !important; /* Fixed dark slate */
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const CertificateTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: #64748b !important; /* Fixed slate */
  z-index: 1;
`;

export const WinnerName = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 3.5rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 900;
  z-index: 1;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #6366f1; /* Fallback for engines that don't support clip-text */
  letter-spacing: -1px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
  margin-top: 10px;
`;

export const CertificateText = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSize.lg};
  color: #1e293b !important; /* Fixed very dark slate */
  max-width: 500px;
  line-height: 1.5;
  z-index: 1;
  font-weight: 600;
  margin: 0;
  b {
    color: #6366f1; /* Indigo */
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

export const BadgeContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  z-index: 1;
`;

export const Badge = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #ffd700 0%, #f59e0b 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  box-shadow: 0 10px 25px #f59e0b40;
  border: 4px solid white;

  &::after {
    content: "★";
    position: absolute;
    bottom: -15px;
    background: #ef4444;
    color: white;
    padding: 2px 12px;
    border-radius: 20px;
    font-size: 1.2rem;
    font-weight: 900;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 60px;
    height: 60px;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 480px) {
    width: 90px;
    height: 90px;

    svg {
      width: 45px;
      height: 45px;
    }

    &::after {
      bottom: -10px;
      font-size: 1rem;
    }
  }
`;

export const CertificateFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center align for better balance */
  width: 100%;
  margin-top: 20px;
  padding: 0 10px 0;
  z-index: 1;
`;

export const FooterItem = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  min-width: 80px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
`;

export const FooterText = styled.div<{ $variant?: "small" | "tiny" }>`
  font-weight: 900;
  font-size: ${(props) =>
    props.$variant === "small" ? "0.8rem" : props.$variant === "tiny" ? "0.6rem" : "1rem"};
  color: #1e293b !important;
  font-family: ${(props) => props.theme.fonts.secondary};
  opacity: 1 !important;
  letter-spacing: ${(props) => (props.$variant === "tiny" ? "1px" : "normal")};
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  padding: 15px;
  background: ${(props) =>
    props.theme.theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.02)"};
  border-radius: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${(props) => (props.theme.theme === "dark" ? "#334155" : "white")};
  border: 1px solid ${(props) => (props.theme.theme === "dark" ? "#475569" : "#e2e8f0")};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${(props) => (props.theme.theme === "dark" ? "#cbd5e1" : "#64748b")};
  z-index: 10;

  &:hover {
    background: ${(props) => (props.theme.theme === "dark" ? "#475569" : "#f1f5f9")};
    color: #ef4444;
    transform: rotate(90deg);
  }
`;
