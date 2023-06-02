import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Destination, Crew, Technology } from './pages';
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
