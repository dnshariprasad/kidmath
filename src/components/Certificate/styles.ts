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
  border: 12px double ${(props) => props.theme.colors.primary};
  border-radius: 24px;
  padding: 20px 15px 40px; /* Reduced vertical padding */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${(props) =>
    props.theme.theme === "dark"
      ? "radial-gradient(circle, #1e293b 0%, #0f172a 100%)"
      : "radial-gradient(circle, #ffffff 0%, #fff9e6 100%)"};
  position: relative;

  @media (max-width: 480px) {
    padding: 15px 10px 30px;
    border-width: 8px;
  }
`;

export const Sunburst = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: repeating-conic-gradient(
    from 0deg,
    transparent 0deg 20deg,
    ${(props) => props.theme.colors.primary}08 20deg 40deg
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
`;

export const CertificateHeader = styled.h1`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSize.lg}; /* Smaller */
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 2px;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 1;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.05);
`;

export const CertificateSubHeader = styled.h2`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSize.sm}; /* Smaller */
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 10px;
  font-weight: 800;
  z-index: 1;
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
  font-size: ${(props) => props.theme.fontSize.xl}; /* Smaller */
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 900;
  border-bottom: 3px dotted ${(props) => props.theme.colors.primary}80;
  padding: 0 20px 2px;
  margin-bottom: 10px;
  z-index: 1;
  transform: rotate(-0.5deg);
`;

export const CertificateText = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSize.base}; /* Smaller */
  color: ${(props) => props.theme.colors.textPrimary};
  max-width: 400px;
  line-height: 1.3;
  margin-bottom: 10px;
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
  width: 60px; /* Smaller */
  height: 60px; /* Smaller */
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: 2px dashed ${(props) => props.theme.colors.primary};
    border-radius: 50%;
  }

  svg {
    width: 30px;
    height: 30px;
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
  font-size: 0.4rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
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
