import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import KidButton from "../components/KidButton";
import { Card, PageContainer } from "../theme/KidStyles";
import { Calculator, Type, Languages, Trophy } from "lucide-react";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  width: 100%;
  max-width: 1000px;
  margin-top: 30px;
`;

const CategoryCard = styled(motion.div)<{ $color: string }>`
  background: white;
  padding: 30px;
  border-radius: 32px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 3px solid transparent;
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
      title: "Math Magic",
      desc: "Numbers, counting & more!",
      icon: <Calculator size={40} />,
      color: "#6C5CE7",
      path: "/counting"
    },
    {
      title: "English Fun",
      desc: "ABC, spelling & words!",
      icon: <Type size={40} />,
      color: "#00CEC9",
      path: "/alphabet"
    },
    {
      title: "Hindi Letters",
      desc: "Learn Varnamala with joy!",
      icon: <Languages size={40} />,
      color: "#FF7675",
      path: "/alphabet_hindi"
    }
  ];

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <h1 style={{ fontSize: "3.5rem", color: "#2D3436", marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
          Hi there! <motion.span animate={{ rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }}>👋</motion.span>
        </h1>
        <p style={{ fontSize: "1.3rem", color: "#636E72", maxWidth: "600px", margin: "0 auto" }}>
          What would you like to learn today? Pick a subject and let's start the adventure! 🚀
        </p>
      </motion.div>

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
            <IconWrapper $color={cat.color}>
              {cat.icon}
            </IconWrapper>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#2D3436" }}>{cat.title}</h3>
            <p style={{ color: "#636E72", marginBottom: "25px" }}>{cat.desc}</p>
            <KidButton title="Let's Play!" variant="primary" onClick={() => navigate(cat.path)} />
          </CategoryCard>
        ))}
      </DashboardGrid>

      <Card style={{ marginTop: "50px", textAlign: "center", background: "linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)", color: "white", padding: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
          <Trophy size={48} color="#FFEAA7" />
          <h2 style={{ fontSize: "2.2rem", margin: 0 }}>Quick Challenge!</h2>
        </div>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px", opacity: 0.9 }}>
          Feeling lucky? Try the "Missing Letters" challenge and win extra stars! ✨
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <KidButton 
            title="Start Challenge" 
            variant="secondary" 
            onClick={() => navigate("/missing_letters")}
            style={{ background: "white", color: "#6C5CE7", border: "none" }}
          />
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
