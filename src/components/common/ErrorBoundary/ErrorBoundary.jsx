import React, { Component } from "react";
import * as Sentry from "@sentry/react";
import styles from "./ErrorBoundary.module.scss";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    Sentry.captureException(error);
  }

  handleRetry = () => {
    this.setState({ hasError: false, errorMessage: "" }, () => {
      window.location.reload();
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <h1>Oops! An error occurred.</h1>
          <p>{this.state.errorMessage || "Something went wrong."}</p>
          <button onClick={this.handleRetry} className={styles.button}>
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Sentry.withErrorBoundary(ErrorBoundary, {
  fallback: (
    <div className={styles.container}>
      <h1>Something went wrong.</h1>
      <p>Please try again later.</p>
    </div>
  ),
});
