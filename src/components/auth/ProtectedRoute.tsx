import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store/store";
import NamePrompt from "../NamePrompt";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.alphabet.user);
  const userName = useSelector((state: RootState) => state.alphabet.userName);
  const [showPrompt, setShowPrompt] = useState(!userName);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!userName && showPrompt) {
    return <NamePrompt onComplete={() => setShowPrompt(false)} />;
  }

  return <>{children}</>;
};
