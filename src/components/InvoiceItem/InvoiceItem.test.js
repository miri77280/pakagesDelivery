import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InvoiceItem from './Invoice/InvoiceItem';

describe('<Invoice />', () => {
  test('it should mount', () => {
    render(<InvoiceItem />);
    
    const InvoiceItem = screen.getByTestId('InvoiceItem');

    expect(InvoiceItem).toBeInTheDocument();
  });
});