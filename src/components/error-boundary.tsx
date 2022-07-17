import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';
type ErrorBoundaryProps = {
  ErrorFallback: React.ComponentType<FallbackProps>;
  children: JSX.Element;
  handleReset?: () => void;
  key: [string];
};

const ErrorBoundary = ({
  children,
  ErrorFallback,
  handleReset,
  key,
}: ErrorBoundaryProps): JSX.Element => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={handleReset}
      resetKeys={[...key]}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
