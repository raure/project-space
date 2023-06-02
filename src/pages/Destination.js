import React, { useState, useEffect } from 'react'
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import '../css/Destination.css';
    
const data = require("../data.json");

function Destination() {
    const [content, setContent] = useState(0);
    const {name, description, distance, travel} = data.destinations[content];
    
    const contentHandler = (index) => {
        setContent(index);
    }

    useEffect(() => {
        const list = document.querySelectorAll('.Destination-links span');
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove('active');
        }
        list[content].classList.add("active");
    }, [content]);

    const imgSrc = () => {
        switch (name) {
            case 'Moon':
                return moon
            case 'Mars':
                return mars
            case 'Europa':
                return europa
            case 'Titan':
                return titan
            default:
                return moon;
        }
    }

    return (
        <div className="Destination" data-testid="destination">
            <div className="desktop-left-content">
                <h4 className="Destination-page-title">
                    <span className="page-index">01</span> Pick your destination
                </h4>

                <div className="Destination-image">
                    <img src={imgSrc()} alt={name}/>
                </div>
            </div>
            
            <div className="desktop-right-content">
                <div className="Destination-links">
                    <span onClick={() => contentHandler(0)}>Moon</span>
                    <span onClick={() => contentHandler(1)}>Mars</span>
                    <span onClick={() => contentHandler(2)}>Europa</span>
                    <span onClick={() => contentHandler(3)}>Titan</span>
                </div>
                
                <div className="Destination-pick-container">
                    <div className="upper-content">
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <span className="Destination-line"></span> 
                    </div>

                    <div className="lower-content">
                        <div className="distance">
                            <h5>Avg. distance</h5>
                            <span>{distance}</span>
                        </div>
                        <div className="time">
                            <h5>Est. travel time</h5>
                            <span>{travel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;