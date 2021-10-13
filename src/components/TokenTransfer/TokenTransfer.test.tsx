import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TokenTransfer from './TokenTransfer';

describe('<TokenTransfer />', () => {
  test('it should mount', () => {
    render(<TokenTransfer />);
    
    const tokenTransfer = screen.getByTestId('TokenTransfer');

    expect(tokenTransfer).toBeInTheDocument();
  });
});