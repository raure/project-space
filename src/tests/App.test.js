import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders the App component', () => {
  render(<App />);

  // Assert the presence of the Menu component
  const menuElement = screen.getByRole('navigation');
  expect(menuElement).toBeInTheDocument();

  // Assert the presence of the Home component as the default route
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();

  // Simulate navigation to the Destination page
  const destinationLink = screen.getByText(/Destination/i);
  fireEvent.click(destinationLink);

  // Assert the presence of the Destination component after navigation
  const destinationElement = screen.getByTestId('destination');
  expect(destinationElement).toBeInTheDocument();

  // Simulate navigation to the Crew page
  const crewLink = screen.getByText(/Crew/i);
  fireEvent.click(crewLink);

  // Assert the presence of the Crew component after navigation
  const crewElement = screen.getByTestId('crew');
  expect(crewElement).toBeInTheDocument();

  // Simulate navigation to the Technology page
  const technologyLink = screen.getByText(/Technology/i);
  fireEvent.click(technologyLink);

  // Assert the presence of the Technology component after navigation
  const technologyElement = screen.getByTestId('technology');
  expect(technologyElement).toBeInTheDocument();
});
