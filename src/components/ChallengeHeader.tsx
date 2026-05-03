import React, { memo } from "react";
import { PageHeader, PageTitle, PageSubtitle } from "../theme/globalStyles";
import { LucideIcon } from "lucide-react";
import styled from "styled-components";

interface ChallengeHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  streak: number;
  iconColor?: string;
}

const HeaderWrapper = styled(PageHeader)`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({
  icon: Icon,
  title,
  subtitle,
  iconColor = "#6366F1",
}) => {
  return (
    <HeaderWrapper data-testid="title-area">
      <PageTitle>
        <Icon size={32} color={iconColor} strokeWidth={2.5} />
        {title}
      </PageTitle>
      <PageSubtitle>{subtitle}</PageSubtitle>
    </HeaderWrapper>
  );
};

export default memo(ChallengeHeader);
