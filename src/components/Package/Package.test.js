import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Package from './Package';

describe('<Package />', () => {
  test('it should mount', () => {
    render(<Package />);
    
    const package = screen.getByTestId('Package');

    expect(package).toBeInTheDocument();
  });
});