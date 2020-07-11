import React from 'react';
import { render } from '@testing-library/react';
import Home from './Components/pageHome';

test('renders text', () => {
  const { getByText } = render(<Home />);
  const teks = getByText(/Hi/);
  expect(teks).toBeInTheDocument();
});
