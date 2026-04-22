import React from "react";
import { useNavigate } from "react-router-dom";
import KidButton from "../../components/KidButton";
import { PageContainer, PageHeader, PageTitle, PageSubtitle } from "../../theme/globalStyles";
import { Calculator, Type, Languages, Trophy } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  DashboardGrid,
  CategoryCard,
  IconWrapper,
  WavingEmoji,
  CategoryTitle,
  CategoryDesc,
  PromoCard,
  PromoHeader,
  PromoTitle,
  PromoDesc,
  PromoActionArea,
  WhiteKidButtonWrapper,
} from "./styles";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const userName = useSelector((state: RootState) => state.alphabet.userName);

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
    <PageContainer data-testid="view-welcome">
      <PageHeader data-testid="welcome-header">
        <PageTitle>
          Hi, {userName || "there"}!{" "}
          <WavingEmoji
            animate={{ rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            👋
          </WavingEmoji>
        </PageTitle>
        <PageSubtitle>
          What would you like to learn today? Pick a subject and let's start the adventure! 🚀
        </PageSubtitle>
      </PageHeader>

      <DashboardGrid data-testid="category-grid">
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
            <CategoryTitle>{cat.title}</CategoryTitle>
            <CategoryDesc>{cat.desc}</CategoryDesc>
            <KidButton title="Let's Play!" variant="primary" onClick={() => navigate(cat.path)} />
          </CategoryCard>
        ))}
      </DashboardGrid>

      <PromoCard data-testid="promo-section">
        <PromoHeader>
          <Trophy size={48} color="#FFEAA7" />
          <PromoTitle>Earn Your Awards!</PromoTitle>
        </PromoHeader>
        <PromoDesc>
          Reach a 10-streak in any challenge to win a personalized Achievement Certificate! 🏆✨
        </PromoDesc>
        <PromoActionArea>
          <WhiteKidButtonWrapper>
            <KidButton
              title="Choose a Challenge"
              variant="secondary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </WhiteKidButtonWrapper>
        </PromoActionArea>
      </PromoCard>
    </PageContainer>
  );
};

export default Welcome;
