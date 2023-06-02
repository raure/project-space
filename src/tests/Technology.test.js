import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Technology from '../pages/Technology';

describe('Technology', () => {
  test('renders correct content based on state', () => {
    render(<Technology />);
    
    // Assert initial content
    const initialName = screen.getAllByText(/Launch vehicle/i)[0];
    const initialDescription = screen.getByText(/A launch vehicle or carrier rocket/i);
    expect(initialName).toBeInTheDocument();
    expect(initialDescription).toBeInTheDocument();
    
    // Simulate clicking on different content
    const secondContentButton = screen.getByText('2');
    fireEvent.click(secondContentButton);
    
    // Assert updated content
    const updatedName = screen.getAllByText(/Spaceport/i)[0];
    const updatedDescription = screen.getByText(/A spaceport or cosmodrome/i);
    expect(updatedName).toBeInTheDocument();
    expect(updatedDescription).toBeInTheDocument();
    
    // Simulate clicking on another content
    const thirdContentButton = screen.getByText('3');
    fireEvent.click(thirdContentButton);
    
    // Assert another updated content
    const anotherUpdatedName = screen.getAllByText(/Space capsule/i)[0];
    const anotherUpdatedDescription = screen.getByText(/A space capsule is an often-crewed/i);
    expect(anotherUpdatedName).toBeInTheDocument();
    expect(anotherUpdatedDescription).toBeInTheDocument();
  });
});
