import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Destination, Crew, Technology } from './pages';
import Menu from './components/Menu';
import './App.css';

const App = () => {
  const renderRoutes = () => (
    <>
      <Route path="/project-space/" element={<Home />} />
      <Route path="/project-space/destination" element={<Destination />} />
      <Route path="/project-space/crew" element={<Crew />} />
      <Route path="/project-space/technology" element={<Technology />} />
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
