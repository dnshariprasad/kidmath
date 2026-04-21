import React from "react";
import { Trophy, Download, X, Share2, Loader2, QrCode } from "lucide-react";
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
  SignatureLabel,
  QRCodePlaceholder,
  FooterText,
  ActionButtons,
  CloseButton,
  VerifiedLabel,
} from "./styles";
import { toPng } from "html-to-image";
// @ts-expect-error - downloadjs lacks TypeScript declarations
import download from "downloadjs";

interface CertificateProps {
  onClose: () => void;
  challengeName: string;
  score: number;
}

const Certificate: React.FC<CertificateProps> = ({ onClose, challengeName, score }) => {
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
    // Generate a deep link for HashRouter
    // Pattern: [base-url]#/?certName=...&certScore=...
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}#/?certName=${encodeURIComponent(challengeName)}&certScore=${score}`;

    const shareData = {
      title: "My Kiddoo Achievement!",
      text: `I just achieved a streak of ${score} correct answers in the ${challengeName} challenge on Kiddoo! 🏆`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(
          `${shareData.text} Check it out here: ${shareData.url}`,
        );
        alert("Achievement copied to clipboard! 📋");
      }
    } catch (err) {
      console.error("Error sharing:", err);
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
          <QRCodePlaceholder>
            <QrCode size={25} />
            <VerifiedLabel>VERIFIED</VerifiedLabel>
          </QRCodePlaceholder>

          <CertificateHeader>WOW! You're a PRO!</CertificateHeader>
          <CertificateSubHeader>Super Duper Achievement Award</CertificateSubHeader>

          <CertificateTitle>This award belongs to our amazing...</CertificateTitle>
          <WinnerName>Super Star</WinnerName>

          <CertificateText>
            For being an absolute legend in the <b>{challengeName}</b> challenge! You've smashed a
            streak of <b>{score}</b> correct answers! Keep being awesome! 🚀✨
          </CertificateText>

          <BadgeContainer>
            <Badge>
              <Trophy size={40} />
            </Badge>
          </BadgeContainer>

          <CertificateFooter>
            <FooterItem fullWidth>
              <SignatureLabel>Issue Date</SignatureLabel>
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
