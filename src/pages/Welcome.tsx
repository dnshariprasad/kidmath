import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import KidButton from "../components/KidButton";
import { Card, CenteredContainerVertical } from "../theme/KidStyles";

const Title = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 3.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;
  text-shadow: 0 4px 10px ${(props) => props.theme.colors.shadow};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 30px;
  text-align: center;
  max-width: 400px;
  line-height: 1.6;
`;

const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`;

const EmojiCard = styled(motion.div)`
  font-size: 3rem;
  background: white;
  padding: 20px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: 0 10px 20px ${(props) => props.theme.colors.shadow};
`;

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <CenteredContainerVertical padding="60px 20px">
      <Title
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12 }}
      >
        Hi there! 👋
      </Title>
      <Subtitle>
        Ready to play and learn? Choose a subject from the menu or start a quick challenge below!
      </Subtitle>

      <EmojiGrid>
        <EmojiCard
          whileHover={{ y: -10, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          🔢
        </EmojiCard>
        <EmojiCard
          whileHover={{ y: -10, rotate: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          📚
        </EmojiCard>
        <EmojiCard
          whileHover={{ y: -10, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          🎨
        </EmojiCard>
      </EmojiGrid>

      <Card style={{ textAlign: "center", maxWidth: "600px" }}>
        <h3>Quick Start</h3>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          <KidButton
            title="Math Fun"
            onClick={() => navigate("/counting")}
            variant="secondary"
          />
          <KidButton
            title="English Words"
            onClick={() => navigate("/alphabet")}
            variant="primary"
          />
          <KidButton
            title="Hindi Learning"
            onClick={() => navigate("/alphabet_hindi")}
            variant="accent"
          />
        </div>
      </Card>
    </CenteredContainerVertical>
  );
};

export default Welcome;
