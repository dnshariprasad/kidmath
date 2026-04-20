import styled from "styled-components";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const IconButton = styled(motion.div)`
  width: 56px;
  height: 56px;
  flex-shrink: 0; /* Prevents squashing in flex containers */
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6366f1;
  cursor: pointer;
  border: 2px solid #6366f1;
  transition: all 0.2s ease;

  &:hover {
    background: #6366f1;
    color: white;
  }
`;

const NextIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton
      data-testid="comp-next-icon"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <ChevronRight size={32} strokeWidth={2.5} />
    </IconButton>
  );
};

export default NextIcon;
