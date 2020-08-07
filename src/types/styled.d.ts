import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [k: string]: string };
    background: string;
  }
}
