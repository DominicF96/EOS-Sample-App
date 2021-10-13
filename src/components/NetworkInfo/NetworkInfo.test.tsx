import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NetworkInfo from './NetworkInfo';

describe('<NetworkInfo />', () => {
  test('it should mount', () => {
    render(<NetworkInfo />);
    
    const networkInfo = screen.getByTestId('NetworkInfo');

    expect(networkInfo).toBeInTheDocument();
  });
});