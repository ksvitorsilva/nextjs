import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'Coiny';
        src: url('/static/fonts/Coiny-Regular.ttf');
    }
    @font-face {
        font-family: 'Fredoka One';
        src: url('/static/fonts/FredokaOne-Regular.ttf');
    }
    html { 
        display: flex;
        height: 100%; 
        margin: 0px; 
        padding: 0px; 
        background:  ${({ theme }) => theme.background}
    }
    body { 
        display: flex;
        flex:1;
    }
    div {
        display: flex;
        flex:1;
    }
`;
