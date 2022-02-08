import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PackagesList from './PackagesList';

describe('<PackagesList />', () => {
  test('it should mount', () => {
    render(<PackagesList />);
    
    const packagesList = screen.getByTestId('PackagesList');

    expect(packagesList).toBeInTheDocument();
  });
});