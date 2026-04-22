import React, { memo } from "react";
import { TitleArea, PageHeader, PageTitle, PageSubtitle } from "../theme/globalStyles";
import { LucideIcon } from "lucide-react";

interface ChallengeHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  streak: number; // Kept for prop consistency, though not rendered here anymore
  iconColor?: string;
}

const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({
  icon: Icon,
  title,
  subtitle,
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
      </PageHeader>
    </TitleArea>
  );
};

export default memo(ChallengeHeader);
