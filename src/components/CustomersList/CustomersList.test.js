import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomersList from './CustomersList';

describe('<CustomersList />', () => {
  test('it should mount', () => {
    render(<CustomersList />);
    
    const customersList = screen.getByTestId('CustomersList');

    expect(customersList).toBeInTheDocument();
  });
});