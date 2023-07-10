import React from 'react';
import { getDestinationStrings } from '../components/Strings';
import contentHandler from '../components/ContentHandler';
import GlobalStyle from '../designs/GlobalStyle.js';
import * as Styles from '../designs/DestinationStyle.js';
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';

const data = require("../data.json");

function Destination() {

  // --------- Process the data --------- //
  const { content, contentLinkIndex, contentRef } = contentHandler(0);

  // --------- Data to be displayed --------- //
  const {
    name,
    description,
    distance,
    travel
  } = data.destinations[content];

  // --------- Strings --------- //
  const {
    index,
    header,
    moonLink,
    marsLink,
    europaLink,
    titanLink,
    avgDistanceLabel,
    travelTimeLabel
  } = getDestinationStrings();

  // --------- Design --------- //
  const {
    DestinationDiv,
    RightContentDiv,
    LeftContentDiv,
    DestinationImageDiv,
    DestinationLinksDiv,
    DestinationPickUpperDiv,
    DestinationPickLowerDiv,
    DestinationDistanceDiv,
    DestinationTimeDiv,
    DestinationPickH1,
    DestinationH5,
    DestinationPickH5,
    DestinationPickP,
    DestinationPickSpan,
    PageIndex,
    DestinationLine
  } = Styles;

  const imgSrc = () => {
    switch (name) {
      case 'Moon':
        return moon;
      case 'Mars':
        return mars;
      case 'Europa':
        return europa;
      case 'Titan':
        return titan;
      default:
        return moon;
    }
  };

  return (
    <DestinationDiv data-testid="destination">

      {/* ------ Global Style (for all pages) ---------- */}
      <GlobalStyle />

      {/* ------- Left Content for Desktop -------  */}
      <LeftContentDiv>
        <DestinationH5>
          <PageIndex>{index}</PageIndex> {header}
        </DestinationH5>

        <DestinationImageDiv>
          <img src={imgSrc()} alt={name} />
        </DestinationImageDiv>
      </LeftContentDiv>

      {/* ------- Right Content for Desktop -------  */}
      <RightContentDiv>
        <DestinationLinksDiv>
          <span onClick={() => contentLinkIndex(0)} ref={(ref) => (contentRef.current[0] = ref)}>{moonLink}</span>
          <span onClick={() => contentLinkIndex(1)} ref={(ref) => (contentRef.current[1] = ref)}>{marsLink}</span>
          <span onClick={() => contentLinkIndex(2)} ref={(ref) => (contentRef.current[2] = ref)}>{europaLink}</span>
          <span onClick={() => contentLinkIndex(3)} ref={(ref) => (contentRef.current[3] = ref)}>{titanLink}</span>
        </DestinationLinksDiv>

        {/* ------- Content ABOVE the line -------  */}
        <DestinationPickUpperDiv>

          {/* Title and description */}
          <DestinationPickH1>{name}</DestinationPickH1>
          <DestinationPickP>{description}</DestinationPickP>

          {/* Divider below description */}
          <DestinationLine></DestinationLine>

        </DestinationPickUpperDiv>


        {/* ------- Content BELOW the line -------  */}
        <DestinationPickLowerDiv>

          {/* Avg. Distance */}
          <DestinationDistanceDiv>
            <DestinationPickH5>{avgDistanceLabel}</DestinationPickH5>
            <DestinationPickSpan>{distance}</DestinationPickSpan>
          </DestinationDistanceDiv>

          {/* Est. Travel Time */}
          <DestinationTimeDiv>
            <DestinationPickH5>{travelTimeLabel}</DestinationPickH5>
            <DestinationPickSpan>{travel}</DestinationPickSpan>
          </DestinationTimeDiv>

        </DestinationPickLowerDiv>

      </RightContentDiv>
    </DestinationDiv>
  );
}

export default Destination;
