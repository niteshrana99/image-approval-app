import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-size: 62.5%; */
    }
    html {
        /* font-size: 62.5%; */
    }
    body {
        font-family: 'Poppins', sans-serif;
        /* background: #283048; */
        padding: 16px;
        width:80%;
        margin:0px auto;
      }

    section {
        margin-top: 12px ;
    }
      
`;