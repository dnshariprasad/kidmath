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
  padding: 10px;
  border-radius: 28px;
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary}15;

  /* Hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CertificateBorder = styled.div`
  width: 100%;
  border: 12px solid #ffd700; /* Gold */
  border-radius: 32px;
  padding: 40px 20px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${(props) =>
    props.theme.theme === "dark"
      ? "radial-gradient(circle, #2d3748 0%, #1a202c 100%)"
      : "radial-gradient(circle, #ffffff 0%, #fffdf0 100%)"};
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 0 4px #ffd70040, inset 0 0 100px #ffd70010;

  @media (max-width: 480px) {
    padding: 25px 15px 40px;
    border-width: 8px;
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
  font-size: 2.2rem;
  color: #f59e0b; /* Bright Orange/Gold */
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 3px;
  z-index: 1;
  font-weight: 900;
  text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const CertificateSubHeader = styled.h2`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 30px;
  font-weight: 800;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CertificateTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 5px;
  z-index: 1;
`;

export const WinnerName = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 3.5rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 900;
  padding: 10px 40px;
  margin-bottom: 20px;
  z-index: 1;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const CertificateText = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.colors.textPrimary};
  max-width: 500px;
  line-height: 1.4;
  margin-bottom: 15px;
  z-index: 1;
  font-weight: 600;

  b {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

export const BadgeContainer = styled.div`
  margin-bottom: 10px;
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
`;

export const CertificateFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center align for better balance */
  width: 100%;
  margin-top: 30px; /* More space from the badge above */
  padding: 0 10px 10px;
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

export const VerifiedLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  margin-top: 2px;
`;

export const QRCodePlaceholder = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: white;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  z-index: 2;

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    top: 10px;
    right: 10px;
  }
`;

export const SignatureLabel = styled.span`
  font-size: 0.8rem; /* Increased size */
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 800;
  text-transform: uppercase;
  opacity: 0.7;
`;

export const FooterText = styled.div`
  font-weight: 900; /* Bolder */
  font-size: 1rem; /* Larger */
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: ${(props) => props.theme.fonts.secondary};
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
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
