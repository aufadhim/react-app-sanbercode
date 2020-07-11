import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Components/footer';

test('renders footer', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/Twitter/i,/Telegram/i,/Github/i,/Linked in/i,/Dribbble/i,/auf@tuta.io/i);
  expect(linkElement).toBeInTheDocument();
});
