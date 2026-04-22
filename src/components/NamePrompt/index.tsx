import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { setUserName } from "../../store/slice/AlphabetSlice";
import { KidoText } from "../KidoText";
import KidButton from "../KidButton";
import { User } from "lucide-react";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const Modal = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  padding: 40px;
  border-radius: 32px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  border: 4px solid ${(props) => props.theme.colors.primary}20;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: ${(props) => props.theme.colors.primary}15;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 24px;
  color: ${(props) => props.theme.colors.primary};
`;

const StyledInput = styled.input.attrs({
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      e.target.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  },
})`
  width: 100%;
  padding: 16px 24px;
  border-radius: 16px;
  border: 3px solid ${(props) => props.theme.colors.primary}20;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  margin: 24px 0;
  outline: none;
  transition: all 0.2s ease;
  background: ${(props) => props.theme.colors.surfaceVariant};
  color: ${(props) => props.theme.colors.textPrimary};

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.primary}10;
  }

  &::placeholder {
    color: #ccc;
  }
`;

interface NamePromptProps {
  onComplete: () => void;
}

const NamePrompt: React.FC<NamePromptProps> = ({ onComplete }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (name.trim()) {
      dispatch(setUserName(name.trim()));
      onComplete();
    }
  };

  return (
    <AnimatePresence>
      <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Modal
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <IconWrapper>
            <User size={40} />
          </IconWrapper>
          <KidoText fontSize="xl" color="primary" fontWeight="bold">
            Hi there!
          </KidoText>
          <KidoText fontSize="md" color="textSecondary" margin="8px 0 0">
            What is your name?
          </KidoText>

          <form onSubmit={handleSubmit}>
            <StyledInput
              autoFocus
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
            />
            <KidButton
              title="Start Learning! 🚀"
              onClick={handleSubmit}
              variant="primary"
              width="100%"
              isActive={name.trim().length > 0}
            />
          </form>
        </Modal>
      </Overlay>
    </AnimatePresence>
  );
};

export default NamePrompt;
