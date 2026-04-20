import { Component, ErrorInfo, ReactNode } from "react";
import styled from "styled-components";
import KidButton from "./KidButton";

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
  padding: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
`;

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h1>Oops! Something went wrong. 😅</h1>
          <p>Don't worry, even balloons pop sometimes! Let's try going back home.</p>
          <KidButton
            title="Go Home"
            onClick={() => {
              // GitHub Pages friendly reset
              window.location.hash = "/";
              window.location.reload();
            }}
          />
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
