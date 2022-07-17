/* eslint-disable react/jsx-props-no-spreading */
import '../styles/fonts.css';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global-styles';

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
