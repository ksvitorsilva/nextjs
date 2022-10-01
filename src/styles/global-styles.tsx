/**
 * Module dependencies.
 */

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html { 
        background:  ${({ theme }) => theme?.background};
        display: flex;
        font-family: "Montserrat-Regular";
        height: 100%; 
        user-select: none;
        }
    body { 
        display: flex;
        flex:1;
        margin: 0;
        padding: 0;
    }
    div {
        display: flex;
        flex:1;
    }
`;
