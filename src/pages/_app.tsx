/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global-styles';
// import ThemeSelector from '../components/theme-selector';

export default class MyApp extends App {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme.dark}>
        <GlobalStyle />
        <Component {...pageProps} />
        {/* <ThemeSelector /> */}
      </ThemeProvider>
    );
  }
}
