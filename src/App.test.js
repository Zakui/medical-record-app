import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders new patient record form', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/New medical record/i);
  expect(linkElement).toBeInTheDocument();
});
