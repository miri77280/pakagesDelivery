import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddPackageModal from './AddPackageModal';

describe('<AddPackageModal />', () => {
  test('it should mount', () => {
    render(<AddPackageModal />);
    
    const addPackageModal = screen.getByTestId('AddPackageModal');

    expect(addPackageModal).toBeInTheDocument();
  });
});