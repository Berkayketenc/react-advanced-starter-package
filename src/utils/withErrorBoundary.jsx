import React from "react";
import ErrorBoundary from "../components/common/ErrorBoundary/ErrorBoundary";

const withErrorBoundary = (WrappedComponent) => {
  return (props) => (
    <ErrorBoundary>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
};

export default withErrorBoundary;
