import styled from "styled-components";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const IconButton = styled(motion.div)`
  width: 56px;
  height: 56px;
  flex-shrink: 0; /* Prevents squashing in flex containers */
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  cursor: pointer;
  border: 2px solid #e2e8f0;
  transition: all 0.2s ease;

  &:hover {
    border-color: #64748b;
    background: #f8fafc;
  }
`;

const PreviousIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton
      data-testid="comp-previous-icon"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <ChevronLeft size={32} strokeWidth={2.5} />
    </IconButton>
  );
};

export default PreviousIcon;
