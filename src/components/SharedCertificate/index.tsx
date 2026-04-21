import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Certificate from "../Certificate";

const SharedCertificate: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [certData, setCertData] = useState<{ name: string; score: number } | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get("certName");
    const score = params.get("certScore");

    if (name && score) {
      setCertData({ name, score: parseInt(score, 10) });
    }
  }, [location]);

  if (!certData) return null;

  return (
    <AnimatePresence>
      <Certificate
        onClose={() => {
          setCertData(null);
          // Clean up URL without reloading
          navigate(location.pathname, { replace: true });
        }}
        challengeName={certData.name}
        score={certData.score}
      />
    </AnimatePresence>
  );
};

export default SharedCertificate;
