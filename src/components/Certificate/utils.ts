import { toPng } from "html-to-image";
// @ts-expect-error - downloadjs lacks TypeScript declarations
import download from "downloadjs";

export const downloadCertificate = async (elementId: string, challengeName: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Force width for consistent rendering
  const originalWidth = element.style.width;
  element.style.width = "1000px";

  try {
    await document.fonts.ready;
    await new Promise((resolve) => setTimeout(resolve, 300));

    const dataUrl = await toPng(element, {
      cacheBust: true,
      backgroundColor: "#ffffff",
      pixelRatio: 2,
      canvasWidth: 1200,
      canvasHeight: 900,
    });

    download(dataUrl, `Kiddoo_Certificate_${challengeName}.png`);
  } finally {
    element.style.width = originalWidth;
  }
};

export const shareCertificate = async (elementId: string, challengeName: string, score: number) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const originalWidth = element.style.width;
  element.style.width = "1000px";

  try {
    await document.fonts.ready;
    await new Promise((resolve) => setTimeout(resolve, 300));

    const dataUrl = await toPng(element, {
      cacheBust: true,
      backgroundColor: "#ffffff",
      pixelRatio: 2,
      canvasWidth: 1200,
      canvasHeight: 900,
    });

    const response = await fetch(dataUrl);
    const blob = await response.blob();
    const file = new File([blob], `Kiddoo_Certificate_${challengeName}.png`, {
      type: "image/png",
    });

    const shareData = {
      title: "My Kiddoo Achievement!",
      text: `I just achieved a score of ${score}/10 in the ${challengeName} test on Kiddoo! 🏆 Try it yourself at: https://dnshariprasad.github.io/kiddoo/`,
      files: [file],
    };

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share(shareData);
    } else {
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
        return "copied";
      }
    }
  } finally {
    element.style.width = originalWidth;
  }
  return "shared";
};
