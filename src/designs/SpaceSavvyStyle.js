import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import backgroundImg from '../assets/space-savvy/space-photo.jpeg';
import chevron from '../assets/space-savvy/down-chevron.svg';


//------------------ Divs ------------------//
export const SpaceSavvyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpaceSavvyBackground = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  margin-top: -150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: brightness(100%);
  }
`;

export const LaunchContainer = styled.div`
  overflow-y: auto;
  position: relative;
  background-color: #eaedf1;
  padding: 20px;
`;

export const FilterContainer = styled.div`
  background-color: #f9fafa;
  display: flex;
  flex-direction: column;
  padding: 50px 50px 50px 30px;
  color: #000000;
  border-bottom: 0.5px solid #dddddd;

  .keyword, .launchpad, .minYear, .maxYear{
      width: 100%;
  }

  @media (min-width: 850px) {
    flex-direction: row;

    .keyword{
      width: 30vw;
    }

    .launchpad{
      width: 25vw;
    }

    .minYear, .maxYear{
      width: 15vw;
    }
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  color: #656565;
  
  label{
    font-family: 'Barlow', sans-serif;
    font-weight: bold;
    text-align: left;
  }

  @media (min-width: 850px) {
    margin: 0 20px;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 50px;
  color: #000000;

  p{
    font-family: 'Barlow', sans-serif;
  }
`;

export const OneResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 10px;
  border-bottom: 0.5px solid #dddddd;

  @media (min-width: 850px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ResultInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding: 0px 30px;

  strong{
    font-family: 'Barlow', sans-serif;
    color: #7c8185;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 25px;

  button{
    background-color: #ffffff;
    border: 1px solid #dddddd;
    color: #7c8185;
    padding: 10px 25px;
    margin: 7px;
    font-family: 'Barlow', sans-serif;
    font-size: 15px;

    &:hover {
    background-color: #7c8185;
    color: #ffffff;
    }
  }

  @media (min-width: 850px) {
    flex-direction: row;
    justify-content: flex-start;
    width: 65vw;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;

  span{
    font-family: 'Barlow', sans-serif;
  }

  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

export const FlightNumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-grow: 1;
  color: #000000;
  width: 100%;

  h5{
    font-family: 'Barlow', sans-serif;
    font-size: 25px;
  }

  span{
    font-family: 'Barlow', sans-serif;
    color: #7c8185;
  }

  @media (min-width: 850px) {
    width: 35vw;
    align-items: unset;
  }  
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0 10px 0;
  justify-content: space-between;
`;








//------------------ Text/Button/Input/Select ------------------//
export const SpaceSavvyH1 = styled.h1`
    text-transform: capitalize;
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 4.5px;
    z-index: 0;
    margin-top: 150px;

    @media (max-width: 420px) {
      width: 250px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 850px) {
      font-size: 60px;
    }

    @media (min-width: 800px) {
      font-size: 80px;
    }
`;

export const CornerText = styled.h3`
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 4.75px;
    text-transform: uppercase;
    text-align: left;
    color: #FFFFFF;
    margin-left: 55px;
    margin-top: 150px;
    z-index: 0;

    @media (min-width: 850px) {
      font-size: 24px;
    }
`;

export const FailedMissionText = styled.span`
  color: red;
  margin-left: 5px;
  font-family: 'Barlow', sans-serif;

  span{
    color: #000000;
  }
`;

export const LaunchSubtitle = styled.p`
  font-family: 'Barlow', sans-serif;
  text-align: center;
  padding: 10px 0px;
  color: #7c8185;

  @media (min-width: 850px) {
    text-align: left;
  }
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 12px 30px 15px 15px;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  text-align: left;
  
`;

export const Select = styled.select`
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  margin-top: 10px;
  padding: 12px 30px 15px 15px;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  text-align: left;

  appearance: none;
  background-color: transparent;
  background-image: url(${chevron});
  background-repeat: no-repeat;
  background-position: calc(100% - 10px);
  background-size: 12px;
`;

export const FilterButton = styled.button`
  background-color: #1fbba6;
  color: #ffffff;
  margin-top: 30px;
  margin-left: 20px;
  padding: 15px;
  border: none;
  font-family: 'Barlow', sans-serif;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    border: 2px solid #1fbba6;
    background-color: #ffffff;
    color: #1fbba6;
    padding: 13px;
  }

  @media (min-width: 850px) {
    margin-bottom: 2px;
    padding: 0 35px;

    &:hover {
    padding: 0 33px;
    }
  }
`;

export const FooterText = styled.span`
  color: #7c8185;
  font-family: 'Barlow', sans-serif;
`;

export const FooterLink = styled.a`
  color: #7c8185;
  font-family: 'Barlow', sans-serif;
  text-decoration: underline;
`;








//------------------ Image ------------------//
const ChevronContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 180px;
`;

const ChevronButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: url(${chevron}) center no-repeat;
  background-size: contain;
  cursor: pointer;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);

  @media (min-width: 850px) {
    width: 60px;
    height: 60px;
  }

`;

export const Chevron = ({ onClick }) => {
  return (
    <ChevronContainer>
      <ChevronButton onClick={onClick} />
    </ChevronContainer>
  );
};

export const MissionPatchImage = styled(Image)`
  width: 100px; 
  height: 100px;
  margin-right: 10px;
  flex-shrink: 0;
`;
