import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Menu from './components/Menu';
import './App.css';

const App = () => {
  const renderRoutes = () => (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
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
