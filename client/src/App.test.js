import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Humankind In Squares/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App Component', () => {
  it('renders correct heading', ()=> {
    const {getByRole} = render(<App />);
    expect(getByRole('heading').textContent)
        .toMatch(/Welcome to Humankind In Squares/i);
  });
});
