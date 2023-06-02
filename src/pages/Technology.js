import React, { useState, useEffect } from 'react'
import launchOne from "../assets/technology/image-launch-vehicle-portrait.jpg";
import launchTwo from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportOne from "../assets/technology/image-spaceport-portrait.jpg";
import spaceportTwo from "../assets/technology/image-spaceport-landscape.jpg";
import capsuleOne from "../assets/technology/image-space-capsule-portrait.jpg";
import capsuleTwo from "../assets/technology/image-space-capsule-landscape.jpg";
import '../css/Technology.css';
    
const data = require("../data.json");

function Technology() {
    const [content, setContent] = useState(0);
    const {name, description} = data.technology[content];
    
    const contentHandler = (index) => {
        setContent(index);
    }

    useEffect(() => {
        const list = document.querySelectorAll('.Technology-links span');
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove('active');
        }
        list[content].classList.add("active");
    }, [content]);

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
        <div className="Technology" data-testid="technology">
            <h4 className="Technology-page-title">
                <span className="page-index">03</span> Space launch 101
            </h4>

            <div className="desktop-tech-content">

                <div className="Technology-img-container">
                    <Image desktop ={imgSrc()[0]} mobile ={imgSrc()[1]} name={name} />
                </div>
                
                <div className="Technology-links">
                    <span onClick={() => contentHandler(0)}>1</span>
                    <span onClick={() => contentHandler(1)}>2</span>
                    <span onClick={() => contentHandler(2)}>3</span>
                </div>
                
                <div className="Technology-container">
                    <h3>The terminology...</h3>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

function Image({desktop, mobile, name}){
    return (
        <picture>
            <source media="(max-width: 1199px)" srcSet={mobile} className="Technology-img" />
            <source media="(min-width: 1200px)" srcSet={desktop} className="Technology-img" />
            <img src={desktop} alt={name} className="Technology-img" />
        </picture>
    )
}

export default Technology;