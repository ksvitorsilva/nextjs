/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextApp from 'next/app';
import { ThemeProvider } from 'styled-components';
import Themes from '../styles/theme';
import GlobalStyle from '../styles/global-styles';
import ThemeSelector from '../components/theme-selector';

export default class App extends NextApp {
  state = { theme: '' };

  componentDidMount(): void {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      this.setState(() => ({
        theme: localTheme,
      }));
    } else {
      this.changeState('light');
    }
  }

  private changeState = (state: string): void => {
    this.setState(
      () => ({ theme: state }),
      () => localStorage.setItem('theme', this.state.theme)
    );
  };

  private handleToggle = (): void => {
    if (!this.state.theme) {
      this.changeState('light');
    } else if (this.state.theme === 'dark') {
      this.changeState('light');
    } else if (this.state.theme === 'light') {
      this.changeState('dark');
    }
  };

  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    const { theme } = this.state;

    return (
      <>
        {theme && (
          <ThemeProvider theme={Themes[theme]}>
            <ThemeSelector toggle={this.handleToggle} theme={theme} />
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </>
    );
  }
}
