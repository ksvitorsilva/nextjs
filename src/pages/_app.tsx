import '../styles/fonts.css';
import GlobalStyle from '../styles/global-styles';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';

const AppProvider = dynamic(() => import('../components/app-provider'), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;
