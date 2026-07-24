import React, { useState } from 'react';
import './App.css';

// Flight details data
const flightList = [
  { id: 1, flightNumber: 'AI-101', origin: 'New Delhi', destination: 'Mumbai', time: '10:00 AM', price: '$150' },
  { id: 2, flightNumber: '6E-204', origin: 'Bengaluru', destination: 'Chennai', time: '01:30 PM', price: '$90' },
  { id: 3, flightNumber: 'UK-812', origin: 'Hyderabad', destination: 'Kolkata', time: '06:45 PM', price: '$120' }
];

export function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

export function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export function UserGreeting() {
  const [bookedFlight, setBookedFlight] = useState('');

  const handleBook = (flightNumber) => {
    setBookedFlight(`Ticket successfully booked for flight ${flightNumber}!`);
  };

  return (
    <div>
      <h1>Welcome back</h1>
      <h3>Flight Details (Booking Available)</h3>
      {bookedFlight && <div className="booking-alert">{bookedFlight}</div>}
      <table className="flight-table">
        <thead>
          <tr>
            <th>Flight No</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Time</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {flightList.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.time}</td>
              <td>{flight.price}</td>
              <td>
                <button className="book-btn" onClick={() => handleBook(flight.flightNumber)}>
                  Book Ticket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>
      <h3>Flight Details (Browse Only)</h3>
      <table className="flight-table">
        <thead>
          <tr>
            <th>Flight No</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Time</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flightList.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.time}</td>
              <td>{flight.price}</td>
              <td>
                <span className="guest-status">Please log in to book</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Greeting isLoggedIn={isLoggedIn} />
      <div style={{ marginTop: '20px' }}>
        {button}
      </div>
    </div>
  );
}

export default App;
