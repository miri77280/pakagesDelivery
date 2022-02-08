import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Customer from './Customer';

describe('<Customer />', () => {
  test('it should mount', () => {
    render(<Customer />);
    
    const customer = screen.getByTestId('Customer');

    expect(customer).toBeInTheDocument();
  });
});