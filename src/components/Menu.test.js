import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from './Menu';

describe('Menu', () => {
    test('renders menu items and handles click events', () => {
      render(
        <MemoryRouter>
          <Menu />
        </MemoryRouter>
      );
  
      // Assert initial active link
      const initialActiveLink = screen.getByText(/Home/i);
      expect(initialActiveLink.classList.contains('active')).toBe(true);
  
      // Simulate clicking on the "Destination" link
      const destinationLink = screen.getByText(/Destination/i);
      fireEvent.click(destinationLink);
  
      // Assert active link after clicking "Destination" link
      const activeDestinationLink = screen.getByText(/Destination/i);
      expect(activeDestinationLink.classList.contains('active')).toBe(true);
  
      // Simulate clicking on the "Crew" link
      const crewLink = screen.getByText(/Crew/i);
      fireEvent.click(crewLink);
  
      // Assert active link after clicking "Crew" link
      const activeCrewLink = screen.getByText(/Crew/i);
      expect(activeCrewLink.classList.contains('active')).toBe(true);
  
      // Simulate clicking on the "Technology" link
      const technologyLink = screen.getByText(/Technology/i);
      fireEvent.click(technologyLink);
  
      // Assert active link after clicking "Technology" link
      const activeTechnologyLink = screen.getByText(/Technology/i);
      expect(activeTechnologyLink.classList.contains('active')).toBe(true);
    });
  });