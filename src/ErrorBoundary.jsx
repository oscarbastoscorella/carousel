import React from "react";
import styled from "styled-components";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Error>Oops! something went wrong.</Error>;
    }

    return this.props.children;
  }
}

const Error = styled.h1`
  color: #ff00f7;
  font-size: 1.5em;
`;
