import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InvoiceList from './InvoiceList';

describe('<InvoiceList />', () => {
  test('it should mount', () => {
    render(<InvoiceList />);
    
    const invoiceList = screen.getByTestId('InvoiceList');

    expect(invoiceList).toBeInTheDocument();
  });
});