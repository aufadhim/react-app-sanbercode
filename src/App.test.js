import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders nav', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i,/Hooks/i,/Lifting State Up/i,/redux/i,/list/i,/api/i);
  expect(linkElement).toBeInTheDocument();
});
