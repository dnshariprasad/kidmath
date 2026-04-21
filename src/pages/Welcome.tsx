import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import KidButton from "../components/KidButton";
import { Card, PageContainer, PageHeader, PageTitle, PageSubtitle } from "../theme/KidStyles";
import { Calculator, Type, Languages, Trophy } from "lucide-react";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin-top: 15px;
`;

const CategoryCard = styled(motion.div)<{ $color: string }>`
  background: white;
  padding: 30px;
  border-radius: 32px;
  box-shadow:
    0 10px 20px rgba(99, 102, 241, 0.04),
    0 20px 40px rgba(99, 102, 241, 0.06),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid rgba(99, 102, 241, 0.15);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.$color};
    transform: translateY(-10px);
    box-shadow: 0 20px 40px ${(props) => props.$color}20;
  }
`;

const IconWrapper = styled.div<{ $color: string }>`
  background: ${(props) => props.$color}15;
  color: ${(props) => props.$color};
  padding: 20px;
  border-radius: 24px;
  margin-bottom: 20px;
`;

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Counting Fun",
      desc: "Numbers, counting & more!",
      icon: <Calculator size={40} />,
      color: "#6366F1",
      path: "/counting",
    },
    {
      title: "English Fun",
      desc: "ABC, spelling & words!",
      icon: <Type size={40} />,
      color: "#6366F1",
      path: "/alphabet",
    },
    {
      title: "Hindi Letters",
      desc: "Learn Varnamala with joy!",
      icon: <Languages size={40} />,
      color: "#6366F1",
      path: "/alphabet_hindi",
    },
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>
          Hi there!{" "}
          <motion.span
            animate={{ rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ display: "inline-block" }}
          >
            👋
          </motion.span>
        </PageTitle>
        <PageSubtitle>
          What would you like to learn today? Pick a subject and let's start the adventure! 🚀
        </PageSubtitle>
      </PageHeader>

      <DashboardGrid>
        {categories.map((cat, i) => (
          <CategoryCard
            key={cat.title}
            $color={cat.color}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => navigate(cat.path)}
          >
            <IconWrapper $color={cat.color}>{cat.icon}</IconWrapper>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#2D3436" }}>
              {cat.title}
            </h3>
            <p style={{ color: "#636E72", marginBottom: "25px" }}>{cat.desc}</p>
            <KidButton title="Let's Play!" variant="primary" onClick={() => navigate(cat.path)} />
          </CategoryCard>
        ))}
      </DashboardGrid>

      <Card
        style={{
          marginTop: "60px",
          textAlign: "center",
          background: "linear-gradient(135deg, #6366F1 0%, #a29bfe 100%)",
          color: "white",
          padding: "40px 20px",
          width: "100%",
          maxWidth: "1000px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          <Trophy size={48} color="#FFEAA7" />
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", margin: 0 }}>Quick Challenge!</h2>
        </div>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "30px",
            opacity: 0.9,
            maxWidth: "500px",
            margin: "0 auto 30px",
          }}
        >
          Feeling lucky? Try the "Missing Letters" challenge and win extra stars! ✨
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <KidButton
            title="Start Challenge"
            variant="secondary"
            onClick={() => navigate("/missing_letters")}
            style={{ background: "white", color: "#6366F1", border: "none" }}
          />
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
