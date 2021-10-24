// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  *::before {
    box-sizing: border-box;
  }

  .container {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  .footerFrag{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

  }
  .divSeparator p {
    color: ${({ theme }) => theme.body};

  }
  .footer-59391{
    background: ${({ theme }) => theme.body};


  }
  #root{
    background: ${({ theme }) => theme.body};
  }
  .gt{
      background:${({ theme }) => theme.gt};
  }
  .site-logo{
    background:${({ theme }) => theme.gt};
  }
  .box{
    background: ${({ theme }) => theme.box};
    color: ${({ theme }) => theme.text};
  }`