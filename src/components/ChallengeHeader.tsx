import React, { memo } from "react";
import {
  TitleArea,
  PageHeader,
  PageTitle,
  PageSubtitle,
  SessionStats,
  NumberedStar,
  StarEmoji,
  StarNumber,
  PlusSign,
} from "../theme/globalStyles";
import { LucideIcon } from "lucide-react";

interface ChallengeHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  streak: number;
  iconColor?: string;
}

const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({
  icon: Icon,
  title,
  subtitle,
  streak,
  iconColor = "#6366F1",
}) => {
  return (
    <TitleArea data-testid="title-area">
      <PageHeader>
        <PageTitle>
          <Icon size={40} color={iconColor} strokeWidth={2.5} />
          {title}
        </PageTitle>
        <PageSubtitle>{subtitle}</PageSubtitle>
        <SessionStats>
          {Array.from({ length: Math.min(10, streak) }).map((_, i) => (
            <NumberedStar
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 10, delay: i * 0.05 }}
            >
              <StarEmoji>⭐</StarEmoji>
              <StarNumber>{i + 1}</StarNumber>
            </NumberedStar>
          ))}
          {streak > 10 && <PlusSign>+</PlusSign>}
        </SessionStats>
      </PageHeader>
    </TitleArea>
  );
};

export default memo(ChallengeHeader);
