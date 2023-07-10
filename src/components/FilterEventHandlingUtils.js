import React from 'react';

export const handleKeywordChange = (event, setKeyword) => {
    setKeyword(event.target.value);
};

export const handleLaunchpadChange = (event, setLaunchpadId) => {
    setLaunchpadId(event.target.value);
};

export const handleMinYearChange = (event, setMinYear) => {
    setMinYear(event.target.value);
};

export const handleMaxYearChange = (event, setMaxYear) => {
    setMaxYear(event.target.value);
};

export const handleFilterButtonClick = (
    launches,
    launchpads,
    keyword,
    launchpadId,
    minYear,
    maxYear,
    setFilteredLaunches,
    setFilteredLaunchpads,
    setNumItems
    ) => {

    let filteredLaunches = launches;
    let filteredLaunchpads = launchpads;

    // Filter by keyword
    if (keyword) {
        filteredLaunches = filteredLaunches.filter((launch) => {
            const { flight_number, rocket, payloads } = launch;
            const { rocket_name } = rocket;
            const payloadIds = payloads.map((payload) => payload.payload_id);

            return (
                flight_number.toString().includes(keyword) ||
                rocket_name.toLowerCase().includes(keyword.toLowerCase()) ||
                payloadIds.some((payloadId) => payloadId.toLowerCase().includes(keyword.toLowerCase()))
            );
        });
    }

    // Filter by launchpad
    if (launchpadId !== 'Any') {
        filteredLaunches = filteredLaunches.filter((launch) => {
          const { launch_site } = launch;
          const { site_id } = launch_site;
    
          const launchpad = launchpads.find((launchpad) => launchpad.id === site_id);
          return launchpad && launchpad.full_name === launchpadId;
        });
    
        filteredLaunchpads = filteredLaunchpads.filter((launchpadItem) => {
          return launchpadItem.full_name === launchpadId;
        });
      }

    // Filter by minimum year
    if (minYear !== 'Any') {
        const minYearTimestamp = new Date(`${minYear}-01-01`).getTime();

        filteredLaunches = filteredLaunches.filter((launch) => {
            const { launch_date_local } = launch;
            const launchTimestamp = new Date(launch_date_local).getTime();

            return launchTimestamp >= minYearTimestamp;
        });
    }

    // Filter by maximum year
    if (maxYear !== 'Any') {
        const maxYearTimestamp = new Date(`${maxYear}-12-31`).getTime();

        filteredLaunches = filteredLaunches.filter((launch) => {
            const { launch_date_local } = launch;
            const launchTimestamp = new Date(launch_date_local).getTime();

            return launchTimestamp <= maxYearTimestamp;
        });
    }

    // For invalid range
    if (minYear !== 'Any' && maxYear !== 'Any' && parseInt(minYear) > parseInt(maxYear)) {
        alert('Invalid year range. Please select a valid range.');
        return;
    }

    setFilteredLaunches(filteredLaunches);
    setFilteredLaunchpads(filteredLaunchpads);

    // Calculate the number of filtered items
    const filteredItemCount = filteredLaunches.length;
    setNumItems(filteredItemCount);
};


export const getLaunchpadOptions = (launchpads) => {
    const launchpadIds = launchpads ? ['Any', ...launchpads.map((launchpad) => launchpad.full_name)] : ['Any'];
    return launchpadIds.map((name, index) => (
        <option key={index} value={name}>
        {name}
        </option>
    ));
};
  
