import styled from 'styled-components';
import backgroundMobile from '../assets/destination/background-destination-mobile.jpg';
import backgroundTablet from '../assets/destination/background-destination-tablet.jpg';
import backgroundDesktop from '../assets/destination/background-destination-desktop.jpg';



//------------------ Divs ------------------//
export const DestinationDiv = styled.div`
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
    flex-direction: row;
    justify-content: center;
    gap: 30px;

  }
`;

export const RightContentDiv = styled.div`
  height: 20vh;

  @media (min-width: 600px) {
    height: 35vh;
  }

  @media (min-width: 1200px) {
    height: unset;
    width: 50vw;
    align-self: center;
  }
`;

export const LeftContentDiv = styled.div`
  height: 45vh;

  @media (min-width: 600px) {
    height: 40vh;
  }

  @media (min-width: 1200px) {
    margin-top: 100px;
    height: unset;
    width: 50vw;
    align-self: center;
  }
`;

export const DestinationImageDiv = styled.div`
  img {
    margin: 0 auto;
    width: 250px;
  }

  @media (min-width: 600px) {
    img {
      width: 300px;
    }
  }

  @media (min-width: 1200px) {
    img {
      width: 450px;
    }
  }
`;

export const DestinationLinksDiv = styled.div`
    margin-top: 25px;

    span {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1em;
      letter-spacing: 2.7px;
      color: #D0D6F9;
      margin: 0 10px;
      text-transform: uppercase;
    }

    span:hover,
    span.active {
      padding-bottom: 10px;
      border-bottom: 2px solid white;
      color: white;
    }

    span:hover {
      opacity: 0.5;
    }

    @media (min-width: 600px) {
      margin-top: 50px;
      margin-bottom: 30px;

      span {
        font-size: 1.2em;
        margin: 0 20px;
      }
    }

    @media (min-width: 1200px) {
      display: flex;
      justify-content: flex-start;
      margin-top: 150px;
    }
`;

export const DestinationPickUpperDiv = styled.div`
  @media (min-width: 600px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (min-width: 1200px) {
    margin-left: 0;
    margin-right: 120px;
  }
`;

export const DestinationPickLowerDiv = styled.div`
  margin: 30px;
  padding-bottom: 30px;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 35px;
  }

  @media (min-width: 1200px) {
    justify-content: flex-start;
    gap: 55px;
    padding-bottom: 0px;
  }
`;

export const DestinationDistanceDiv = styled.div`
  @media (min-width: 1200px) {
    text-align: left;
    margin-right: 50px;
  }
`;

export const DestinationTimeDiv = styled.div`
  @media (min-width: 1200px) {
    text-align: left;
  }
`;




//------------------ Text ------------------//
export const DestinationPickH1 = styled.h1`
    font-weight: 400;
    text-transform: uppercase;
    font-size: 56px;
    line-height: 64px;
    margin: 25px auto 15px;

    @media (min-width: 600px) {
      font-size: 80px;
      margin: 10px auto 15px;
    }

    @media (min-width: 1200px) {
      font-size: 100px;
      margin-top: 50px;
      margin-left: 30px;
      text-align: left;
    }
`;

export const DestinationH5 = styled.h5`
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 4.75px;
    color: #D0D6F9;
    margin-bottom: 40px;

    @media (min-width: 600px) {
      text-align: left;
      margin-top: 35px;
      margin-left: 20px;
      font-size: 20px;
    }

    @media (min-width: 1200px) {
      text-align: center;
      margin-left: 0;
      margin-right: 80px;
      margin-bottom: 40px;
      font-size: 28px;
    }
`;

export const DestinationPickH5 = styled.h5`
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 2.7px;
    color: #D0D6F9;
    text-transform: uppercase;
    margin: 15px 0;

    @media (min-width: 1200px) {
      text-align: left;
    }
`;

export const DestinationPickP = styled.p`
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    color: #D0D6F9;
    width: 70%;
    margin: 0 auto;

    @media (min-width: 600px) {
      font-size: 16px;
      width: 85%;
    }

    @media (min-width: 1000px) {
      text-align: left;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
      width: 90%;
      padding: 30px 30px 10px 0;
      line-height: 32px;
    }
`;

export const DestinationPickSpan = styled.span`
    font-family: 'Bellefair';
    font-weight: 400;
    font-size: 28px;
    text-transform: uppercase;
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
      margin-top: 35px;
      margin-left: 20px;
      font-size: 20px;
    }

    @media (min-width: 1200px) {
      text-align: center;
      margin-left: 0;
      margin-bottom: 40px;
      font-size: 28px;
    }
`;

export const DestinationLine = styled.span`
    border: 0.5px solid #FFFFFF;
    opacity: 0.15;
    display: flex;
    margin: 25px 30px;

    @media (min-width: 600px) {
      text-align: left;
      margin-top: 35px;
      margin-left: 20px;
      font-size: 1.2em;
    }

    @media (min-width: 1200px) {
      text-align: center;
      margin-left: 0;
      margin-bottom: 40px;
    }
`;