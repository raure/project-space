import React, { useState, useEffect, useRef } from 'react';
import { fetchLaunches, fetchLaunchPads } from '../components/ApiFetchingUtils.js';
import { handleKeywordChange, handleLaunchpadChange, handleMinYearChange,
         handleMaxYearChange, handleFilterButtonClick, getLaunchpadOptions } from '../components/FilterEventHandlingUtils.js';
import { renderLaunches } from '../components/RenderLaunchUtils.js';
import { getSpaceSavvyStrings } from '../components/Strings';
import GlobalStyle from '../designs/GlobalStyle.js';
import * as Styles from '../designs/SpaceSavvyStyle.js';

const SpaceSavvy = () => {
  // --------- Store all data --------- //
  const [launches, setLaunches] = useState([]);
  const [launchpads, setLaunchpads] = useState([]);

  // --------- Store filtered data --------- //
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [filteredLaunchpads, setFilteredLaunchpads] = useState([]);

  // --------- Store filter values --------- //
  const [keyword, setKeyword] = useState('');
  const [minYear, setMinYear] = useState('Any');
  const [maxYear, setMaxYear] = useState('Any');
  const [launchpadId, setLaunchpadId] = useState('Any');

  // --------- Store unique value of years --------- //
  const [yearOptions, setYearOptions] = useState([]);

  // --------- Store number of missions --------- //
  const [numItems, setNumItems] = useState(0);

  const launchContainerRef = useRef(null);

  // --------- Design --------- //
  const {
    SpaceSavvyContainer,
    SpaceSavvyBackground,
    Chevron,
    LaunchContainer,
    CornerText,
    SpaceSavvyH1,
    FilterContainer,
    FilterSection,
    Input,
    Select,
    FilterButton,
    ResultsContainer,
    FooterContainer,
    FooterText,
    FooterLink
  } = Styles;

  // --------- Strings --------- //
  const { cornerText, welcomeText, footerText, footerLinkText } = getSpaceSavvyStrings();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetchedLaunches = await fetchLaunches();
      const fetchedLaunchpads = await fetchLaunchPads();

      setLaunches(fetchedLaunches);
      setLaunchpads(fetchedLaunchpads);

      // Extract unique launch years from launches data
      const uniqueYears = [...new Set(fetchedLaunches.map((launch) => new Date(launch.launch_date_local).getFullYear()))];
      const sortedYears = uniqueYears.sort();

      // Update year options for select inputs
      setYearOptions(sortedYears);
      setMinYear("Any");
      setMaxYear("Any");

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChevronClick = () => {
      launchContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterClick = () => {
    handleFilterButtonClick(
      launches,
      launchpads,
      keyword,
      launchpadId,
      minYear,
      maxYear,
      setFilteredLaunches,
      setFilteredLaunchpads,
      setNumItems
    );
  };

  return (
    <>
      <GlobalStyle padding="0px"/>
      <SpaceSavvyContainer>
        <SpaceSavvyBackground>
          <CornerText>{cornerText}</CornerText>
          <SpaceSavvyH1>{welcomeText}</SpaceSavvyH1>
          <Chevron onClick={handleChevronClick} />
        </SpaceSavvyBackground>

        <LaunchContainer ref={launchContainerRef}>
          <FilterContainer>
            <FilterSection className="keyword">
              <label htmlFor="keyword">Keyword</label>
              <Input
                type="text"
                placeholder="eg. Falcon"
                value={keyword}
                onChange={(event) => handleKeywordChange(event, setKeyword)}
                autoComplete="off"
              />
            </FilterSection>
            <FilterSection className="launchpad">
              <label htmlFor="launchpad-select">Launchpad</label>
              <Select
                id="launchpad-select"
                value={launchpadId}
                onChange={(event) => handleLaunchpadChange(event, setLaunchpadId)}
              >
                {getLaunchpadOptions(launchpads)}
              </Select>
            </FilterSection>
            <FilterSection className="minYear">
              <label htmlFor="min-year-select">Min Year</label>
              <Select
                id="min-year-select"
                value={minYear}
                onChange={(event) => handleMinYearChange(event, setMinYear)}
              >
                <option value="Any">Any</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </Select>
            </FilterSection>
            <FilterSection className="maxYear">
              <label htmlFor="max-year-select">Max Year</label>
              <Select
                id="max-year-select"
                value={maxYear}
                onChange={(event) => handleMaxYearChange(event, setMaxYear)}
              >
                <option value="Any">Any</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </Select>
            </FilterSection>
            <FilterButton onClick={handleFilterClick}>
              Apply
            </FilterButton>
          </FilterContainer>

          <ResultsContainer>
            {/* Display the number of items */}
            <p>Showing {numItems} Missions</p>
            {renderLaunches(filteredLaunches, filteredLaunchpads)}
          </ResultsContainer>
          
          <FooterContainer>
            <FooterText>{footerText}</FooterText>
            <FooterLink onClick={handleScrollToTop}>{footerLinkText}</FooterLink>
          </FooterContainer>
       
        </LaunchContainer>
      </SpaceSavvyContainer>
    </>
  );
};

export default SpaceSavvy;

