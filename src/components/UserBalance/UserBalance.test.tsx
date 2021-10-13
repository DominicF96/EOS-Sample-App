import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserBalance from './UserBalance';

describe('<UserBalance />', () => {
  test('it should mount', () => {
    render(<UserBalance />);
    
    const userBalance = screen.getByTestId('UserBalance');

    expect(userBalance).toBeInTheDocument();
  });
});