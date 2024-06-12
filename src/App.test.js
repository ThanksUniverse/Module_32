import { render, screen } from '@testing-library/react';
import App from './App';

test('Page Loaded', () => {
    render(<App />);
    const linkElement = screen.getByText(/Github Branches/i);
    expect(linkElement).toBeInTheDocument();
});

test('Pricings Working', () => {
    render(<App />);
    const linkElement = screen.getByText(/Professional/i);
    expect(linkElement).toBeInTheDocument();
});