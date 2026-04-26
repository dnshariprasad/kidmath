import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setStreak } from "../../store/slice/AlphabetSlice";
import { KidoText } from "../KidoText";
import KidButton from "../KidButton";
import { Zap, X } from "lucide-react";
import { RootState } from "../../store/store";

import { TRANSLATIONS } from "../../constants/translations";
import {
  Overlay,
  Modal,
  CloseButton,
  IconWrapper,
  Form,
  Select,
  InputGroup,
  NumberInput,
} from "./styles";

interface SetStreakModalProps {
  onClose: () => void;
}

const SetStreakModal: React.FC<SetStreakModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const t = TRANSLATIONS.en;
  const gameStats = useSelector((state: RootState) => state.alphabet.gameStats);

  const GAME_LABELS: Record<string, string> = {
    math: t.game_math,
    spelling: t.game_spelling,
    missing_letters: t.game_missing_letters,
    comparison: t.game_comparison,
    sorting: t.game_sorting,
    sudoku: t.game_sudoku,
    alphabet_hindi: t.game_alphabet_hindi,
    master_test: t.game_master_test,
  };

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
            {t.stm_title}
          </KidoText>
          <KidoText fontSize="sm" color="textSecondary">
            {t.stm_subtitle}
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
                {t.stm_streak}
              </KidoText>
              <NumberInput
                type="number"
                min="0"
                max="999"
                value={streakValue}
                onChange={(e) => setStreakValue(parseInt(e.target.value) || 0)}
              />
            </InputGroup>

            <KidButton title={t.stm_update} onClick={handleSave} variant="primary" width="100%" />
          </Form>
        </Modal>
      </Overlay>
    </AnimatePresence>
  );
};

export default SetStreakModal;
