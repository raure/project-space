import { createGlobalStyle } from 'styled-components';

import BellefairFont from '../assets/fonts/Bellefair-Regular.ttf';
import BarlowCondensedRegularFont from '../assets/fonts/BarlowCondensed-Regular.ttf';
import BarlowCondensedBoldFont from '../assets/fonts/BarlowCondensed-Bold.ttf';
import BarlowFont from '../assets/fonts/Barlow-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bellefair';
    src: url(${BellefairFont});
  }

  @font-face {
    font-family: 'Barlow Condensed';
    font-weight: 400;
    src: url(${BarlowCondensedRegularFont});
  }
  
  @font-face {
    font-family: 'Barlow Condensed';
    font-weight: 700;
    src: url(${BarlowCondensedBoldFont});
  }

  @font-face {
    font-family: 'Barlow';
    src: url(${BarlowFont});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bellefair', serif;
    text-align: center;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: #0B0D17;
    color: white;
    padding: ${(props) => props.padding || '0 20px'};
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
