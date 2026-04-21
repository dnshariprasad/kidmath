import React from "react";
import {
  TitleArea,
  PageHeader,
  PageTitle,
  PageSubtitle,
  SessionStats,
  StarSpan,
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
          {Array.from({ length: Math.min(12, streak) }).map((_, i) => (
            <StarSpan
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 10, delay: i * 0.05 }}
            >
              ⭐
            </StarSpan>
          ))}
        </SessionStats>
      </PageHeader>
    </TitleArea>
  );
};

export default ChallengeHeader;
