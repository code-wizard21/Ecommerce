import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './searchbar';
import { vi } from 'vitest';

const mockSearch = vi.fn((query => {return (query)}))

describe('Searchbar', () => {
  it('renders form input and button', () => {
    render(<SearchBar search={mockSearch} />);

    fireEvent.input(screen.getByRole('searchbox', { target: { value: "search" } }))

    fireEvent.submit(screen.getByRole('button'))

  });
});