import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders Home component', () => {
  render(<Home />);
  
  // Assert that the text content is present in the rendered component
  expect(screen.getByText(/So, you want to travel to/i)).toBeInTheDocument();
  
  const spaceElements = screen.queryAllByText(/Space/i);
  expect(spaceElements.length).toBeGreaterThan(0); // Assert that at least one element with "Space" text exists
  
  expect(screen.getByText(/Let's face it;/i)).toBeInTheDocument();
  expect(screen.getByText(/outer space and not hover/i)).toBeInTheDocument();
});

test('button click redirects to /destination', () => {
  // Mocking the window.location.href property
  delete window.location;
  window.location = { href: '' };
  
  render(<Home />);
  
  // Simulating button click
  const exploreButton = screen.getByRole('button', { name: /Explore/i });
  exploreButton.click();
  
  // Assert that the window.location.href is updated
  expect(window.location.href).toBe('/destination');
});
