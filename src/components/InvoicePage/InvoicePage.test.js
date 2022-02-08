import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InvoicePage from './InvoicePage';

describe('<InvoicePage />', () => {
  test('it should mount', () => {
    render(<InvoicePage />);
    
    const invoicePage = screen.getByTestId('InvoicePage');

    expect(invoicePage).toBeInTheDocument();
  });
});