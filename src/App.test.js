import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const rootElement = screen.getByText(/Material-UI DataGrid performance measurements/i);
  expect(rootElement).toBeInTheDocument();
});
