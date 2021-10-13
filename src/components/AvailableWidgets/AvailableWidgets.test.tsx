import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AvailableWidgets from './AvailableWidgets';

describe('<AvailableWidgets />', () => {
  test('it should mount', () => {
    render(<AvailableWidgets />);
    
    const availableWidgets = screen.getByTestId('AvailableWidgets');

    expect(availableWidgets).toBeInTheDocument();
  });
});