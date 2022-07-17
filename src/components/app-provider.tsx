import { ThemeProvider } from 'styled-components';
import thenmes from '../styles/theme';
import ThemeSelector from './theme-selector';
import useLocalStorageState from '../hooks/useLocalStorageState';

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

export default AppProvider;
