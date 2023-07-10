import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { getAppStrings } from './components/Strings';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import SpaceSavvy from './pages/SpaceSavvy';
import Menu from './components/Menu';
import './App.css';


const App = () => {
  const { homePath, destinationPath, crewPath, techPath, spaceSavvyPath } = getAppStrings();
  const renderRoutes = () => (
    <>
      <Route path={homePath} element={<Home />} />
      <Route path={destinationPath} element={<Destination />} />
      <Route path={crewPath} element={<Crew />} />
      <Route path={techPath} element={<Technology />} />
      <Route path={spaceSavvyPath} element={<SpaceSavvy />} />
    </>
  );

  return (
    <Router>
      <Menu />
      <Routes>{renderRoutes()}</Routes>
    </Router>
  );
};

export default App;
