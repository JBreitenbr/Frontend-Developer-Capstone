import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReservationForm from './components/ReservationForm';

test('Renders the ReservationForm button', () => {
  render(<MemoryRouter><ReservationForm /></MemoryRouter>);
  const makeReservation = screen.getByText("Reserve now!");
  expect(makeReservation).toBeInTheDocument();
});

test('Date input works correctly', () => {
  render(<MemoryRouter><ReservationForm /></MemoryRouter>);
  const date = screen.getByLabelText(/Date/);
  fireEvent.change(date, { target: { value: "2024-28-01" } });
  expect(date.value).toEqual("2024-28-01");
});