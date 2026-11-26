// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughRange title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughRange/i);
    expect(titleElement).toBeInTheDocument();
});
