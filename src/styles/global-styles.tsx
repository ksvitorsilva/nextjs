import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html { 
        display: flex;
        height: 100%; 
        margin: 0px; 
        padding: 0px; 
        background: rgb(136, 21, 250); 
        background: linear-gradient(49deg, rgba(136, 21, 250, 1) 22%, rgba(181, 86, 224, 1) 100%);}
    body { 
        display: flex;
        flex:1;
    }
    div {
        display: flex;
        flex:1;
    }
`;
