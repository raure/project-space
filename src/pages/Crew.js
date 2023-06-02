import React, { useState, useEffect } from 'react'
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import '../css/Crew.css';
    
const data = require("../data.json");

function Crew() {
    const [content, setContent] = useState(0);
    const {name, role, bio} = data.crew[content];
    
    const contentHandler = (index) => {
        setContent(index);
    }

    useEffect(() => {
        const list = document.querySelectorAll('.Crew-links span');
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove('active');
        }
        list[content].classList.add("active");
    }, [content]);

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
        <div className="Crew" data-testid="crew">
            <h4 className="Crew-page-title">
                <span className="page-index">02</span> Meet your crew
            </h4>

            <div className="desktop-crew-content">
                <div className="right">
                    <div className="Crew-image">
                        <img src={imgSrc()} alt={name}/>
                    </div>

                    <span className="Crew-line"></span> 
                </div>
                
                <div className="left">
                    <div className="Crew-links">
                        <span onClick={() => contentHandler(0)}>.</span>
                        <span onClick={() => contentHandler(1)}>.</span>
                        <span onClick={() => contentHandler(2)}>.</span>
                        <span onClick={() => contentHandler(3)}>.</span>
                    </div>
                    
                    <div className="Crew-container">
                            <h3>{role}</h3>
                            <h1>{name}</h1>
                            <p>{bio}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Crew;