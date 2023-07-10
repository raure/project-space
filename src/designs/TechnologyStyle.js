import styled from 'styled-components';
import backgroundMobile from '../assets/technology/background-technology-mobile.jpg';
import backgroundTablet from '../assets/technology/background-technology-tablet.jpg';
import backgroundDesktop from '../assets/technology/background-technology-desktop.jpg';



//------------------ Divs ------------------//
export const TechDiv = styled.div`
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
  overflow-x: hidden;

  @media (min-width: 600px) {
    background-image: url(${backgroundTablet});
    background-size: 100% 100vh;
    z-index: 0;
  }

  @media (min-width: 1200px) {
    background-image: url(${backgroundDesktop});
  }
`;

export const DesktopTechDiv = styled.div`
  height: 70vh;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 50vh;
  }
`;

export const TechImageDiv = styled.div`
  img {
    min-height: 30vh;
    max-height: 30vh;
    width: 100%;
    margin-bottom: 10px;
  }

  @media (min-width: 1200px) {
    display: flex;
    justify-content: flex-end;
    width: 30vw;
    order: 3;
    
    img {
      width: 100%;
      max-height: 55vh;
    }
  }
`;

export const TechLinksDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;

    span:hover {
      border: 1px solid #FFFFFF;
    }

    span.active {
      background-color: white;
      color: #0B0D17;
      opacity: 1;
    }

    span {
      border-radius: 50%;
      background-color: transparent;
      width: fit-content;
      padding: 4px 15px;
      font-weight: 400;
      font-size: 20px;
      line-height: 37px;
      text-align: center;
      letter-spacing: 2px;
      color: white;
      border: 1px solid #757474;
      margin: 10px 0;
      cursor: pointer;
    }

    @media (min-width: 600px) {
        span {
          padding: 10px 20px;
          font-size: 30px;
        }
    }

    @media (min-width: 1200px) {
        width: 8vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        order: 1;
    }
`;

export const TechInfoDiv = styled.div`
  padding-bottom: 40px;

  @media (min-width: 1200px) {
    width: 52vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 2;
  }
`;





//------------------ Text ------------------//
export const TechH5 = styled.h5`
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #D0D6F9;
    margin-top: 100px;
    margin-bottom: 30px;

    @media (min-width: 600px) {
      text-align: left;
      margin-top: 60px;
      margin-bottom: 25px;
      margin-left: 20px;
      font-size: 20px;
    }

    @media (min-width: 1200px) {
      margin-top: 60px;
      margin-bottom: 85px;
      margin-left: 50px;
      font-size: 28px;
    }
`;

export const TechH4 = styled.h4`
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    letter-spacing: 2.7px;
    color: #D0D6F9;
    text-transform: uppercase;
    margin: 15px 0 10px 0;

    @media (min-width: 600px) {
      font-size: 24px;
      margin: 30px 0 10px 0;
    }

    @media (min-width: 1200px) {
      font-size: 32px;
      text-align: left;
    }
`;

export const TechH3 = styled.h3`
    font-weight: 400;
    text-transform: uppercase;
    margin: 10px 0 10px 0;
    font-size: 24px;
    line-height: 46px;

    @media (min-width: 600px) {
      font-size: 40px;
      margin: 20px 0 15px 0;
    }

    @media (min-width: 1200px) {
      font-size: 56px;
      text-align: left;
    }
`;

export const TechP = styled.p`
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    color: #D0D6F9;
    width: 75%;
    margin: 0 auto;

    @media (min-width: 600px) {
      font-size: 16px;
    }

    @media (min-width: 1200px) {
      width: 100%;
      margin: 0 auto;
      text-align: left;
    }
`;

export const PageIndex = styled.span`
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 2.5px;
    color: #D0D6F9;
    margin-right: 10px;
    margin-bottom: 40px;
    opacity: 0.5;

    @media (min-width: 600px) {
      text-align: left;
      margin-top: 60px;
      margin-bottom: 25px;
      margin-left: 20px;
      font-size: 20px;
    }

    @media (min-width: 1200px) {
      margin-left: 50px;
      font-size: 28px;
    }
`;