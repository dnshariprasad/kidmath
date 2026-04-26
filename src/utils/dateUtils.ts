export const formatDate = (date: Date = new Date()): string => {
  return date.toLocaleDateString();
};

export const formatTime = (date: Date = new Date()): string => {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });
};

export const generateCertificateId = (): string => {
  const datePart = new Date().toISOString().split("T")[0].replace(/-/g, "");
  const timePart = Date.now().toString().slice(-6);
  const randomPart = Math.random().toString(36).substring(7).toUpperCase();
  return `KIDDOO-${datePart}-${timePart}-${randomPart}`;
};
