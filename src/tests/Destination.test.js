import React from 'react';
import { render, screen } from '@testing-library/react';
import Destination from '../pages/Destination';

describe('Destination', () => {
  test('renders Destination component', () => {
    render(<Destination />);

    expect(screen.getByText('Pick your destination')).toBeInTheDocument();

    const marsTitle = screen.getByText('Mars');
    expect(marsTitle).toBeInTheDocument();

    const moonImage = screen.getByAltText('Moon');
    expect(moonImage).toBeInTheDocument();

    expect(() =>
      screen.getByText(/Don't forget to pack your hiking boots/i)
    ).toThrow();

    const avgDistanceText = screen.getByText('Avg. distance');
    expect(avgDistanceText).toBeInTheDocument();

    const distanceValue = screen.getByText('384,400 km');
    expect(distanceValue).toBeInTheDocument();

    const travelTimeText = screen.getByText('Est. travel time');
    expect(travelTimeText).toBeInTheDocument();

    const travelTimeValue = screen.getByText('3 days');
    expect(travelTimeValue).toBeInTheDocument();
  });
});
