/**
 * Module dependencies.
 */

import ThemeSelector from './theme-selector';
import thenmes from 'src/styles/theme';
import useLocalStorageState from 'src/hooks/useLocalStorageState';
import { ThemeProvider } from 'styled-components';

/**
 * AppProvider.
 */

const AppProvider = ({ children }: Custom.ChildrenProp) => {
  const [state, setState] = useLocalStorageState<string>('theme', 'light');
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
    <ThemeProvider theme={thenmes[state]}>
      <ThemeSelector toggle={handleToggle} theme={state} />
      {children}
    </ThemeProvider>
  );
};

/**
 * Export AppProvider.
 */

export default AppProvider;
