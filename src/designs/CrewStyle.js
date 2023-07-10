import styled from 'styled-components';
import backgroundMobile from '../assets/crew/background-crew-mobile.jpg';
import backgroundTablet from '../assets/crew/background-crew-tablet.jpg';
import backgroundDesktop from '../assets/crew/background-crew-desktop.jpg';



//------------------ Divs ------------------//
export const CrewDiv = styled.div`
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

export const DesktopCrewDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 600px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
  }
`;

export const RightContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;
  margin-top: 20px;

  @media (min-width: 600px) {
    height: 15vh;
  }

  @media (min-width: 1200px) {
    width: 50vw;
  }
`;

export const LeftContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30vh;
  margin-top: 100px;

  @media (min-width: 600px) {
    height: 25vh;
  }

  @media (min-width: 1200px) {
    width: 50vw;
    margin-left: 80px;
    align-items: flex-start;
  }
`;

export const CrewImageDiv = styled.div`
  img {
    margin: 0 auto;
    width: 220px;
  }

  @media (min-width: 600px) {
    order: 3;
    height: 20vh;
    margin-top: 100px;

    img {
      width: fit-content;
    }
  }

  @media (min-width: 1200px) {
    img {
      margin-top: -110px;
      width: 480px;
    }
  }
`;

export const CrewLinksDiv = styled.div`
    margin-top: 30px;

    span {
      color: #FFFFFF;
      opacity: 0.3;
      font-size: 9em;
      cursor: pointer;

        &:hover {
         opacity: 0.5;
        }

        &.active {
         color: white;
         opacity: 1;
        }
    }

    @media (min-width: 600px) {
        order: 2;
        margin-top: -130px;
    }

    @media (min-width: 1200px) {
        margin-left: 75px;
    }
`;

export const CrewInfoDiv = styled.div`
  margin-bottom: 50px;
  padding-bottom: 30px;

  @media (min-width: 600px) {
    order: 1;
  }

  @media (min-width: 1200px) {
    margin-left: 75px;
  }
`;





//------------------ Text ------------------//
export const CrewH5 = styled.h5`
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #D0D6F9;
    margin-top: 100px;
    margin-bottom: 90px;

    @media (min-width: 600px) {
      text-align: left;
      margin-top: -80px;
      margin-bottom: 25px;
      margin-left: 30px;
      font-size: 20px;
    }

    @media (min-width: 1200px) {
      margin-top: 60px;
      margin-bottom: 85px;
      margin-left: 50px;
      font-size: 28px;
    }
`;

export const CrewH4 = styled.h4`
    font-weight: 400;
    text-transform: uppercase;
    opacity: 0.5;
    font-size: 16px;
    line-height: 20px;

    @media (min-width: 600px) {
      font-size: 24px;
    }

    @media (min-width: 1000px) {
      line-height: 70px;
    }

    @media (min-width: 1200px) {
      font-size: 32px;
      text-align: left;
    }
`;

export const CrewH3 = styled.h3`
    font-weight: 400;
    text-transform: uppercase;
    margin: 10px 0 20px 0;
    font-size: 24px;
    line-height: 30px;

    @media (min-width: 600px) {
      font-size: 40px;
      margin: 20px 0 35px 0;
    }

    @media (min-width: 1000px) {
      line-height: 40px;
    }

    @media (min-width: 1200px) {
      font-size: 56px;
      text-align: left;
    }
`;

export const CrewP = styled.p`
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    color: #D0D6F9;
    width: 85%;
    margin: 0 auto;

    @media (min-width: 600px) {
      font-size: 16px;
      width: 70%;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
      text-align: left;
      margin-bottom: 50px;
      width: auto;
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
      margin-top: -80px;
      margin-bottom: 25px;
      margin-left: 30px;
      font-size: 20px;
    }

    @media (min-width: 1200px) {
      margin-top: 60px;
      margin-bottom: 85px;
      margin-left: 100px;
      font-size: 28px;
    }
`;

export const CrewLine = styled.span`
    border: 0.5px solid #FFFFFF;
    opacity: 0.15;
    margin: -5px 30px 0 30px;

    @media (min-width: 600px) {
      display: none;
    }
`;