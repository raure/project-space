import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundMobile from '../assets/home/background-home-mobile.jpg';
import backgroundTablet from '../assets/home/background-home-tablet.jpg';
import backgroundDesktop from '../assets/home/background-home-desktop.jpg';



//------------------ Divs ------------------//
export const HomeDiv = styled.div`
  background-image: url(${backgroundMobile});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  z-index: -1;
  bottom: 0px;
  left: 0;
  transform: rotate(0deg);

  @media (min-width: 600px) {
    background-image: url(${backgroundTablet});
    background-size: 100% 100vh;
    z-index: 0;
  }

  @media (min-width: 1200px) {
    background-image: url(${backgroundDesktop});
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const HomeTextDiv = styled.div`
  margin-top: 60px;
  height: 35vh;

  @media (min-width: 1200px) {
    margin-left: 50px;
    margin-bottom: 100px;
    width: 50vw;
    height: 45vh;
  }
`;

export const HomeExploreButtonDiv = styled.div`
  margin-top: 50px;

  @media (min-width: 1200px) {
    margin: 0 0 150px 180px;
    width: 50vw;
  }
`;




//------------------ Text ------------------//
export const HomeH1 = styled.h1`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 80px;
    letter-spacing: 4.5px;
    margin: 20px 40px;

    @media (min-width: 600px) {
      margin: 25px 90px;
    }

    @media (min-width: 1200px) {
      text-align: left;
    }

    @media (min-width: 1600px) {
      font-size: 150px;
    }
`;

export const HomeH5 = styled.h5`
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 4.75px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0 40px;

    @media (min-width: 600px) {
      font-size: 20px;
      margin: 0 90px;
    }

    @media (min-width: 1200px) {
      font-size: 28px;
      text-align: left;
    }
`;

export const HomeP = styled.p`
    font-family: 'Barlow', sans-serif;
    font-size: 15px;
    line-height: 30px;
    margin: 0 40px;

    @media (min-width: 600px) {
      font-size: 16px;
      margin: 0 90px;
    }

    @media (min-width: 1200px) {
      text-align: left;
    }

    @media (min-width: 1600px) {
      font-size: 18px;
      line-height: 35px;
      word-spacing: 3px;
    }
`;





//------------------ Button ------------------//
export const HomeExploreButton = styled.button`
    border: none;
    border-radius: 150px;
    width: 150px;
    height: 150px;
    background-color: #FFFFFF;
    color: black;
    font-size: 20px;
    font-family: 'Bellefair', serif;
    text-transform: uppercase;
    transition: box-shadow 0.3s ease;
      
    &:hover {
      box-shadow: 0 0 0 50px hsla(0, 0%, 100%, 0.175);
    }
    

    @media (min-width: 600px) {
      border-radius: 200px;
      width: 200px;
      height: 200px;
      font-size: 25px;
    }

    @media (min-width: 1600px) {
      border-radius: 280px;
      width: 280px;
      height: 280px;
      font-size: 35px;

      &:hover {
      box-shadow: 0 0 0 80px hsla(0, 0%, 100%, 0.175);
    }
    }
`;

export const HomeExploreButtonLink = styled(Link)`
    color: black;  
`;