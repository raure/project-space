import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';

test('renders the home component', () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  // Assert that the text elements are rendered
  const headingElement = screen.getByText(/So, you want to travel to/i);
  const titleElements = screen.getAllByText(/Space/i);
  const descriptionElements = screen.getAllByText(/Let's face it;/i);
  
  expect(headingElement).toBeInTheDocument();
  expect(titleElements.length).toBeGreaterThan(0);
  expect(descriptionElements.length).toBeGreaterThan(0);

  // Assert that the explore button is rendered with the correct link
  const exploreButtonElement = screen.getByRole('link', { name: /Explore/i });
  expect(exploreButtonElement).toBeInTheDocument();
  expect(exploreButtonElement).toHaveAttribute('href', '/destination');
});
