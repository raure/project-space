import React from 'react';
import { getHomeStrings, getAppStrings } from '../components/Strings';
import GlobalStyle from '../designs/GlobalStyle.js'
import * as Styles from '../designs/HomeStyle.js';


function Home() {
  const { spaceSavvyPath } = getAppStrings();

    const { 
      firstHeader, 
      space, 
      paragraph, 
      exploreButton 
    } = getHomeStrings();

    const { 
      HomeDiv, 
      HomeTextDiv, 
      HomeExploreButtonDiv, 
      HomeH1, 
      HomeH5, 
      HomeP, 
      HomeExploreButton, 
      HomeExploreButtonLink 
    } = Styles; 

    return (
      <HomeDiv>

       {/* ------ Global Style (for all pages) ---------- */}
        <GlobalStyle />

      {/* ------ Text Div ---------- */}
        <HomeTextDiv>
          <HomeH5>{firstHeader}</HomeH5>
          <HomeH1>{space}</HomeH1>
          <HomeP>{paragraph}</HomeP>
        </HomeTextDiv>
  

      {/* ------ Button Div ---------- */}
       <HomeExploreButtonDiv>

          {/* Button */}
          <HomeExploreButton>

            {/* Button Link */}
            <HomeExploreButtonLink to={spaceSavvyPath}>
             {exploreButton}
            </HomeExploreButtonLink>

          </HomeExploreButton>
       </HomeExploreButtonDiv>
        
      </HomeDiv>   
    );
}
  
export default Home;