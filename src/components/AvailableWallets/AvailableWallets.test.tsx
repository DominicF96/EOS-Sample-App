import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AvailableWallets from './AvailableWallets';

describe('<AvailableWallets />', () => {
  test('it should mount', () => {
    render(<AvailableWallets />);
    
    const availableWallets = screen.getByTestId('AvailableWallets');

    expect(availableWallets).toBeInTheDocument();
  });
});