import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from '../styles/theme';
import ThemeSelector from './theme-selector';
import useLocalStorageState from '../hooks/useLocalStorageState';

const AppProvider: FC = ({ children }: Custom.ChildrenProp) => {
  const [state, setState] = useLocalStorageState('theme', 'light');
  const handleToggle = (): void => {
    switch (state) {
      case 'dark':
        setState('light');
        break;

      case 'light':
        setState('dark');
        break;

      default:
        setState('light');
        break;
    }
  };

  return (
    <ThemeProvider theme={Themes[state]}>
      <ThemeSelector toggle={handleToggle} theme={state} />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
