import React from "react";
import { Trophy, Download, X, Share2, Loader2 } from "lucide-react";
import KidButton from "../KidButton";
import {
  ModalOverlay,
  CertificateContainer,
  CertificateBorder,
  Sunburst,
  CertificateHeader,
  CertificateSubHeader,
  CertificateTitle,
  WinnerName,
  CertificateText,
  BadgeContainer,
  Badge,
  CertificateFooter,
  FooterItem,
  FooterText,
  ActionButtons,
  CloseButton,
} from "./styles";
import { toPng } from "html-to-image";
// @ts-expect-error - downloadjs lacks TypeScript declarations
import download from "downloadjs";

interface CertificateProps {
  onClose: () => void;
  challengeName: string;
  score: number;
  level?: string;
}

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Certificate: React.FC<CertificateProps> = ({ onClose, challengeName, score, level }) => {
  const userName = useSelector((state: RootState) => state.alphabet.userName);
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownloadImage = async () => {
    const element = document.getElementById("certificate-content");
    if (!element) return;

    try {
      setIsDownloading(true);

      // To ensure it looks SAME on web and mobile, we temporarily force a width
      const originalWidth = element.style.width;
      element.style.width = "1000px";

      const dataUrl = await toPng(element, {
        cacheBust: true,
        backgroundColor: "#ffffff",
        pixelRatio: 2,
        canvasWidth: 1200,
        canvasHeight: 900,
      });

      element.style.width = originalWidth; // Restore

      download(dataUrl, `Kiddoo_Certificate_${challengeName}.png`);
    } catch (err) {
      console.error("Error generating image:", err);
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    const element = document.getElementById("certificate-content");
    if (!element) return;

    try {
      setIsDownloading(true);

      // Force width for consistent rendering during capture
      const originalWidth = element.style.width;
      element.style.width = "1000px";

      const dataUrl = await toPng(element, {
        cacheBust: true,
        backgroundColor: "#ffffff",
        pixelRatio: 2,
        canvasWidth: 1200,
        canvasHeight: 900,
      });

      element.style.width = originalWidth;

      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], `Kiddoo_Certificate_${challengeName}.png`, {
        type: "image/png",
      });

      const shareData = {
        title: "My Kiddoo Achievement!",
        text: `I just achieved a streak of ${score} correct answers in the ${challengeName} challenge on Kiddoo! 🏆`,
        files: [file],
      };

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share(shareData);
      } else {
        // Fallback to URL sharing if files aren't supported
        const baseUrl = window.location.origin + window.location.pathname;
        const shareUrl = `${baseUrl}#/?certName=${encodeURIComponent(
          challengeName,
        )}&certScore=${score}`;

        if (navigator.share) {
          await navigator.share({
            title: shareData.title,
            text: shareData.text,
            url: shareUrl,
          });
        } else {
          await navigator.clipboard.writeText(`${shareData.text} Check it out here: ${shareUrl}`);
          alert("Achievement link copied to clipboard! 📋");
        }
      }
    } catch (err) {
      console.error("Error sharing:", err);
      alert("Sharing failed. You can download the image instead! 😊");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <CertificateContainer
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose} title="Close" className="no-print">
          <X size={24} />
        </CloseButton>

        <CertificateBorder id="certificate-content">
          <Sunburst />

          <CertificateHeader>Hooray! You're a PRO!</CertificateHeader>
          <CertificateSubHeader>Super Duper Achievement Award</CertificateSubHeader>

          <CertificateTitle>This award belongs to our amazing...</CertificateTitle>
          <WinnerName>{userName || "Super Star"}</WinnerName>

          <CertificateText>
            For being an absolute legend in the <b>{challengeName}</b> challenge
            {level ? ` (${level} level)` : ""}! You've smashed it with a streak of <b>{score}</b>{" "}
            correct answers! Keep being awesome! 🚀✨
          </CertificateText>

          <BadgeContainer>
            <Badge>
              <Trophy size={40} />
            </Badge>
          </BadgeContainer>

          <CertificateFooter>
            <FooterItem fullWidth>
              <FooterText>{new Date().toLocaleDateString()}</FooterText>
            </FooterItem>
          </CertificateFooter>
        </CertificateBorder>

        <ActionButtons className="no-print">
          <KidButton
            title={isDownloading ? "Generating..." : "Download Image"}
            variant="primary"
            onClick={handleDownloadImage}
            icon={
              isDownloading ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <Download size={20} />
              )
            }
          />
          <KidButton
            title="Share Achievement"
            variant="secondary"
            onClick={handleShare}
            icon={<Share2 size={20} />}
          />
        </ActionButtons>
      </CertificateContainer>
    </ModalOverlay>
  );
};

export default Certificate;
