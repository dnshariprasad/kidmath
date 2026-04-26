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
  CertificateFooter,
  FooterText,
  ActionButtons,
  CloseButton,
} from "./styles";

interface CertificateProps {
  onClose: () => void;
  challengeName: string;
  score: number;
  level?: string;
  timeTaken?: string;
}

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { TRANSLATIONS } from "../../constants/translations";
import { downloadCertificate, shareCertificate } from "./utils";
import { formatDate, formatTime, generateCertificateId } from "../../utils/dateUtils";

const Certificate: React.FC<CertificateProps> = ({
  onClose,
  challengeName,
  score,
  level,
  timeTaken,
}) => {
  const t = TRANSLATIONS.en;
  const userName = useSelector((state: RootState) => state.alphabet.userName);
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownloadImage = async () => {
    setIsDownloading(true);
    try {
      await downloadCertificate("certificate-content", challengeName);
    } catch (err) {
      console.error("Error generating image:", err);
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    setIsDownloading(true);
    try {
      const result = await shareCertificate("certificate-content", challengeName, score);
      if (result === "copied") {
        alert(t.cert_copied);
      }
    } catch (err) {
      console.error("Error sharing:", err);
      alert(t.cert_failed);
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

          <CertificateHeader>{t.cert_pro}</CertificateHeader>
          <CertificateSubHeader>{t.cert_award}</CertificateSubHeader>

          <CertificateTitle>{t.cert_belongs}</CertificateTitle>
          <WinnerName>
            <Trophy size={48} color="#6366f1" />
            {userName || "Super Star"}
          </WinnerName>

          <CertificateText>
            {t.cert_legend} <b>{challengeName}</b> {t.cert_challenge}
            {level ? ` (${level} ${t.cert_level})` : ""}! {t.cert_smashed} <b>{score}/10</b>
            {timeTaken ? (
              <>
                {" "}
                {t.cert_inJust} <b>{timeTaken}</b>
              </>
            ) : (
              ""
            )}
            ! {t.cert_keepAwesome}
          </CertificateText>

          <CertificateFooter>
            <FooterText $variant="small">
              {formatDate()} | {formatTime()}
            </FooterText>
            <FooterText $variant="tiny">{generateCertificateId()}</FooterText>
          </CertificateFooter>
        </CertificateBorder>

        <ActionButtons className="no-print">
          <KidButton
            title={isDownloading ? t.cert_generating : t.cert_download}
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
            title={t.cert_share}
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
