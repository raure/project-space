import React from 'react'
import { getTechStrings } from '../components/Strings';
import contentHandler from '../components/ContentHandler';
import GlobalStyle from '../designs/GlobalStyle.js'
import * as Styles from '../designs/TechnologyStyle.js';
import launchOne from "../assets/technology/image-launch-vehicle-portrait.jpg";
import launchTwo from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportOne from "../assets/technology/image-spaceport-portrait.jpg";
import spaceportTwo from "../assets/technology/image-spaceport-landscape.jpg";
import capsuleOne from "../assets/technology/image-space-capsule-portrait.jpg";
import capsuleTwo from "../assets/technology/image-space-capsule-landscape.jpg";
    
const data = require("../data.json");

function Technology() {

    // --------- Process the data --------- //
    const { content, contentLinkIndex, contentRef } = contentHandler(0);

    // --------- Data to be displayed --------- //
    const {name, description} = data.technology[content];

    // --------- Strings --------- //
    const { index, header, one, two, three, paragraphHeader } = getTechStrings();
    
    // --------- Design --------- //
    const {
        TechDiv,
        DesktopTechDiv,
        TechImageDiv,
        TechLinksDiv,
        TechInfoDiv,
        TechH5,
        TechH4,
        TechH3,
        TechP,
        PageIndex
    } = Styles;

    const imgSrc = () => {
        let imgs = [];
        switch (name) {
            case 'Launch vehicle':
                imgs.push(launchOne);
                imgs.push(launchTwo);
                return imgs
            case 'Spaceport':
                imgs.push(spaceportOne);
                imgs.push(spaceportTwo);
                return imgs
            case 'Space capsule':
                imgs.push(capsuleOne);
                imgs.push(capsuleTwo);
                return imgs
            default:
                imgs.push(launchOne);
                imgs.push(launchTwo);
                return imgs
        }
    }

    return (
        <TechDiv data-testid="technology">

            {/* ------ Global Style (for all pages) ---------- */}
            <GlobalStyle />

            <TechH5>
                <PageIndex>{index}</PageIndex> {header}
            </TechH5>

            {/* ------- Technology Div for Desktop -------  */}
            <DesktopTechDiv>

                {/* Space Launch 101 Image */}
                <TechImageDiv>
                    <Image desktop ={imgSrc()[0]} mobile ={imgSrc()[1]} name={name} />
                </TechImageDiv>
                
                {/* Number Links */}
                <TechLinksDiv>
                    <span onClick={() => contentLinkIndex(0)} ref={(ref) => (contentRef.current[0] = ref)} >
                        {one}
                    </span>
                    <span onClick={() => contentLinkIndex(1)} ref={(ref) => (contentRef.current[1] = ref)} >
                        {two}
                    </span>
                    <span onClick={() => contentLinkIndex(2)} ref={(ref) => (contentRef.current[2] = ref)} >
                        {three}
                    </span>
                </TechLinksDiv>
                
                {/* Space Launch 101 Information */}
                <TechInfoDiv>
                    <TechH4>{paragraphHeader}</TechH4>
                    <TechH3>{name}</TechH3>
                    <TechP>{description}</TechP>
                </TechInfoDiv>
            </DesktopTechDiv>
        </TechDiv>
    );
}

function Image({desktop, mobile, name}){
    return (
        <picture>
            <source media="(max-width: 1199px)" srcSet={mobile}/>
            <source media="(min-width: 1200px)" srcSet={desktop}/>
            <img src={desktop} alt={name}/>
        </picture>
    )
}

export default Technology;