import React from 'react'
import { getCrewStrings } from '../components/Strings';
import contentHandler from '../components/ContentHandler';
import GlobalStyle from '../designs/GlobalStyle.js'
import * as Styles from '../designs/CrewStyle.js';
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";

const data = require("../data.json");

function Crew() {

    // --------- Process the data --------- //
    const { content, contentLinkIndex, contentRef } = contentHandler(0);

    // --------- Data to be displayed --------- //
    const {name, role, bio} = data.crew[content];

    // --------- Strings --------- //
    const { index, header, dot } = getCrewStrings();

    // --------- Design --------- //
    const { 
        CrewDiv,
        DesktopCrewDiv,
        RightContentDiv,
        LeftContentDiv,
        CrewImageDiv,
        CrewLinksDiv,
        CrewInfoDiv,
        CrewH5,
        CrewH4,
        CrewH3,
        CrewP,
        PageIndex,
        CrewLine
    } = Styles; 

    const imgSrc = () => {
        switch (name) {
            case 'Douglas Hurley':
                return douglas
            case 'Mark Shuttleworth':
                return mark
            case 'Victor Glover':
                return victor
            case 'Anousheh Ansari':
                return anousheh
            default:
                return douglas;
        }
    }

    return (
        <CrewDiv data-testid="crew">
            
            {/* ------ Global Style (for all pages) ---------- */}
            <GlobalStyle />

            <CrewH5>
                <PageIndex>{index}</PageIndex> {header}
            </CrewH5>

            {/* ------- Crew Div for Desktop -------  */}
            <DesktopCrewDiv>

                {/* ------- Right Content -------  */}
                <RightContentDiv>
                    <CrewImageDiv>
                        <img src={imgSrc()} alt={name}/>
                    </CrewImageDiv>

                    {/* Divider below description for Mobile */}
                    <CrewLine></CrewLine> 
                </RightContentDiv>
                
                {/* ------- Left Content -------  */}
                <LeftContentDiv>
                    <CrewLinksDiv>
                        <span onClick={() => contentLinkIndex(0)} ref={(ref) => (contentRef.current[0] = ref)} >{dot}</span>
                        <span onClick={() => contentLinkIndex(1)} ref={(ref) => (contentRef.current[1] = ref)} >{dot}</span>
                        <span onClick={() => contentLinkIndex(2)} ref={(ref) => (contentRef.current[2] = ref)} >{dot}</span>
                        <span onClick={() => contentLinkIndex(3)} ref={(ref) => (contentRef.current[3] = ref)} >{dot}</span>
                    </CrewLinksDiv>
                    
                    {/* Crew Information */}
                    <CrewInfoDiv>
                        <CrewH4>{role}</CrewH4>
                        <CrewH3>{name}</CrewH3>
                        <CrewP>{bio}</CrewP>
                    </CrewInfoDiv>
                </LeftContentDiv>

            </DesktopCrewDiv>
        </CrewDiv>
    );
}

export default Crew;