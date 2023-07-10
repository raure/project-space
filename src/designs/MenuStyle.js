import styled from 'styled-components';
import iconHamburger from '../assets/shared/icon-hamburger.svg';
import iconClose from '../assets/shared/icon-close.svg';

//------------------ Divs ------------------//
export const Nav = styled.nav`
  padding: 40px 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;


  @media (min-width: 600px) and (max-width: 1199px) {
    padding: 0px 0px 0px 30px;
  }

  @media (min-width: 1200px) {
    padding: 40px 0px 0px 30px;
  }
`;

export const Logo = styled.a`
    z-index: 1;
`;

export const NavLine = styled.span`
  height: 1px;
  margin-left: 100px;
  border: 1px solid #ffffff;
  opacity: 0.25;
  display: none;
  position: absolute;
  z-index: 3;

  @media (min-width: 600px) {
    z-index: 1;
  }

  @media (min-width: 1200px) {
    display: block;
    width: clamp(15em, 15vw, 25em);
  }

  @media (min-width: 1300px) {
    width: clamp(20em, 30vw, 40em);
  }
  
  @media (min-width: 1600px) {
    width: clamp(20em, 40vw, 40em);
  }
`;

export const Menu = styled.ul`
  background-color: hsl(230, 35%, 7%);
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 140px 0px 30px 70px;
  align-items: flex-start;
  width: 80%;
  position: absolute;
  min-height: 100vh;
  top: 0px;
  left: -2000px;
  transition: 0.4s right ease-in-out;
  z-index: 2;
  min-width: 290px;

  @supports (backdrop-filter: blur(81.5485px)) {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(81.5485px);
  }
  
  &.active {
      left: 20vw;
  }

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: -20px;
    padding: 30px 50px 30px 80px;
    width: fit-content;
    min-height: fit-content;
    position: static;
    min-width: fit-content;
  }

  @media (min-width: 600px) and (max-width: 1199px) {
    gap: 35px;
    padding: 40px 50px;
  }

  @media (min-width: 1200px) {
    gap: 50px;
    padding: 45px 90px;
  }

  @media (min-width: 1300px) {
    gap: 5vw;
    padding: 45px 8vw;
  }
  
  @media (min-width: 1600px) {
    gap: 5vw;
    padding: 45px 15vw;
  }
`;

export const MenuLink = styled.li`
  a {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #FFFFFF;
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;

    &:hover{
      padding-bottom: 10px;
      border-bottom: 3px solid white;
      opacity: 0.5;
    }

    &.active {
        padding-bottom: 10px;
        border-bottom: 3px solid white;
    }
  }
  
  
  @media (min-width: 600px) {
    a{
        &:hover,
        &.active {
        padding-bottom: 28px;
        }
    }
    
  }

  @media (min-width: 600px) and (max-width: 1199px) {
    a {
        font-size: 17.5px;

        &:hover,
        &.active {
        padding-bottom: 37px;
        }
    }
  }

  @media (min-width: 1200px) {
    a {
        &:hover,
        &.active {
        padding-bottom: 41px;
        }
    }
    
  }
`;

export const MenuIndex = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  margin-right: 8px;

  @media (min-width: 600px) and (max-width: 1199px) {
    display: none;
  }
`;


export const HamburgerIcon = styled.span`
  background-image: url(${iconHamburger});
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1;

  &.active {
    background-image: url(${iconClose});
    width: 20px;
    height: 21px;
    position: relative;
    z-index: 2;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;
