import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html { 
        display: flex;
        height: 100%; 
        margin: 0px; 
        padding: 0px; 
        background: rgb(136, 21, 250); 
        background:  ${({ theme }) => theme?.background};
        }
    body { 
        display: flex;
        flex:1;
        font-family: "Montserrat-Regular";
    }
    div {
        display: flex;
        flex:1;
    }
`;
