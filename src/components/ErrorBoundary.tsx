import { Component, ErrorInfo, ReactNode } from "react";
import styled from "styled-components";
import KidButton from "./KidButton";
import { AlertCircle } from "lucide-react";
import { KidoText } from "./KidoText";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 40px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
`;

const ErrorCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  padding: 60px;
  border-radius: 40px;
  box-shadow: 0 20px 40px ${(props) => props.theme.colors.shadow};
  max-width: 600px;
  width: 100%;
  border: 4px solid ${(props) => props.theme.colors.primary}15;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const IconWrapper = styled.div`
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: 8px;
`;

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorCard
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <IconWrapper>
              <AlertCircle size={80} strokeWidth={2.5} />
            </IconWrapper>

            <KidoText fontSize="2.5rem" color="primary" fontWeight={900}>
              Oops! 😅
            </KidoText>

            <KidoText fontSize="xl" color="textSecondary" fontWeight="bold">
              Something went wrong!
            </KidoText>

            <KidoText fontSize="lg" color="textSecondary">
              Don't worry, even magic balloons pop sometimes! Let's try going back home to start
              fresh.
            </KidoText>

            <KidButton
              title="Return to Home"
              variant="primary"
              onClick={() => {
                window.location.hash = "/";
                window.location.reload();
              }}
              minWidth="240px"
            />
          </ErrorCard>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
