import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setStreak } from "../../store/slice/AlphabetSlice";
import { KidoText } from "../KidoText";
import KidButton from "../KidButton";
import { Zap, X } from "lucide-react";
import { RootState } from "../../store/store";

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
  padding: 30px;
  border-radius: 32px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  border: 4px solid ${(props) => props.theme.colors.primary}20;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textSecondary};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary}10;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${(props) => props.theme.colors.warning}15;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  color: ${(props) => props.theme.colors.warning};
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 2px solid ${(props) => props.theme.colors.primary}20;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1rem;
  background: ${(props) => props.theme.colors.surfaceVariant};
  color: ${(props) => props.theme.colors.textPrimary};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const NumberInput = styled.input`
  width: 80px;
  padding: 12px;
  border-radius: 12px;
  border: 2px solid ${(props) => props.theme.colors.primary}20;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  background: ${(props) => props.theme.colors.surfaceVariant};
  color: ${(props) => props.theme.colors.textPrimary};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

interface SetStreakModalProps {
  onClose: () => void;
}

const GAME_LABELS: Record<string, string> = {
  math: "Math Magic",
  spelling: "Spelling Bee",
  missing_letters: "Missing Letters",
  comparison: "Big or Small",
  sorting: "Sorting Numbers",
  sudoku: "Kid Sudoku",
  alphabet_hindi: "Hindi Letters",
  master_test: "Grand Master",
};

const SetStreakModal: React.FC<SetStreakModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const gameStats = useSelector((state: RootState) => state.alphabet.gameStats);

  const [selectedGame, setSelectedGame] = useState("math");
  const [streakValue, setStreakValue] = useState(gameStats["math"]?.streak || 0);

  const handleGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const gameId = e.target.value;
    setSelectedGame(gameId);
    setStreakValue(gameStats[gameId]?.streak || 0);
  };

  const handleSave = () => {
    dispatch(setStreak({ gameId: selectedGame, streak: streakValue }));
    onClose();
  };

  return (
    <AnimatePresence>
      <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Modal
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>

          <IconWrapper>
            <Zap size={30} fill="currentColor" />
          </IconWrapper>

          <KidoText fontSize="lg" color="primary" fontWeight="bold">
            Set Game Progress
          </KidoText>
          <KidoText fontSize="sm" color="textSecondary">
            Adjust the streak for any activity
          </KidoText>

          <Form>
            <Select value={selectedGame} onChange={handleGameChange}>
              {Object.keys(GAME_LABELS).map((key) => (
                <option key={key} value={key}>
                  {GAME_LABELS[key]}
                </option>
              ))}
            </Select>

            <InputGroup>
              <KidoText fontSize="md" fontWeight="bold">
                Streak:
              </KidoText>
              <NumberInput
                type="number"
                min="0"
                max="999"
                value={streakValue}
                onChange={(e) => setStreakValue(parseInt(e.target.value) || 0)}
              />
            </InputGroup>

            <KidButton
              title="Update Progress"
              onClick={handleSave}
              variant="primary"
              width="100%"
            />
          </Form>
        </Modal>
      </Overlay>
    </AnimatePresence>
  );
};

export default SetStreakModal;
