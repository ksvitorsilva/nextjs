import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';
import React from 'react';

type ErrorBoundaryProps = {
  ErrorFallback: React.ComponentType<FallbackProps>;
  children: Custom.ChildrenProp;
  handleReset?: () => void;
  key: [string];
};

export default function ErrorBoundary({
  children,
  ErrorFallback,
  handleReset,
  key,
}: ErrorBoundaryProps): JSX.Element {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={handleReset}
      resetKeys={[...key]}
    >
      {children}
    </ReactErrorBoundary>
  );
}
