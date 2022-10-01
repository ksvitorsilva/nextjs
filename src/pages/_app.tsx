/**
 * Module dependencies.
 */

import 'src/styles/fonts.css';
import GlobalStyle from 'src/styles/global-styles';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';

/**
 * Dynamic import AppProvider.
 */

const AppProvider = dynamic(() => import('src/components/app-provider'), {
  ssr: false,
});

/**
 * App.
 */

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  );
};

/**
 * Export App.
 */

export default App;
