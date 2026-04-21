import React from "react";
import { useNavigate } from "react-router-dom";
import KidButton from "../../components/KidButton";
import { PageContainer, PageHeader, PageTitle, PageSubtitle } from "../../theme/globalStyles";
import { Calculator, Type, Languages, Trophy } from "lucide-react";
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
            <CategoryTitle>{cat.title}</CategoryTitle>
            <CategoryDesc>{cat.desc}</CategoryDesc>
            <KidButton title="Let's Play!" variant="primary" onClick={() => navigate(cat.path)} />
          </CategoryCard>
        ))}
      </DashboardGrid>

      <PromoCard>
        <PromoHeader>
          <Trophy size={48} color="#FFEAA7" />
          <PromoTitle>Quick Challenge!</PromoTitle>
        </PromoHeader>
        <PromoDesc>
          Feeling lucky? Try the "Missing Letters" challenge and win extra stars! ✨
        </PromoDesc>
        <PromoActionArea>
          <WhiteKidButtonWrapper>
            <KidButton
              title="Start Challenge"
              variant="secondary"
              onClick={() => navigate("/missing_letters")}
            />
          </WhiteKidButtonWrapper>
        </PromoActionArea>
      </PromoCard>
    </PageContainer>
  );
};

export default Welcome;
