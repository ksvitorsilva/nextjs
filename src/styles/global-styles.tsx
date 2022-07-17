import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html { 
        display: flex;
        height: 100%; 
        background:  ${({ theme }) => theme?.background};
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        }
    body { 
        display: flex;
        flex:1;
        margin: 0;
        padding: 0;
        font-family: "Montserrat-Regular";
    }
    div {
        display: flex;
        flex:1;
    }
`;
