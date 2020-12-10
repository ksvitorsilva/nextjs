import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html { 
        display: flex;
        height: 100%; 
        margin: 0px; 
        padding: 0px; 
        background:  ${({ theme }) => theme?.background};
        /* transition: background 0.5s ease; */
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
