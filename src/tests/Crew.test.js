import React from 'react';
import { render, screen } from '@testing-library/react';
import Crew from '../pages/Crew';

describe('Crew', () => {
  test('renders crew member information', () => {
    render(<Crew />);

    // Assert that the initial crew member is rendered
    const initialName = screen.getAllByText(/Douglas Hurley/i);
    const initialRole = screen.getAllByText(/Commander/i);
    const initialBio = screen.getAllByText(/Douglas Gerald Hurley is an American engineer/i);
    
    // Access the first element
    expect(initialName[0]).toBeInTheDocument();
    expect(initialRole[0]).toBeInTheDocument();
    expect(initialBio[0]).toBeInTheDocument();
  });
});
