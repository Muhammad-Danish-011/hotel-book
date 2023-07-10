import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ roomRate }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckInDateChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  const calculateTotalPrice = () => {
   
    const totalPrice = totalPrice;
    const tax = totalPrice * 0.12;

    return { totalPrice, tax };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    navigate ("/Booked");

    // Calculate the total price and tax
    const { totalPrice, tax } = calculateTotalPrice();

    // Display the total price and tax
    console.log('Total Price:', totalPrice);
    console.log('Tax:', tax);

    // Handle form submission (e.g., send the booking details to the server)
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
        <br /><br /><br /><br />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={handleAddressChange} required />
        <br /><br /><br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        <br /><br /><br /><br />
        <label htmlFor="checkInDate">Check-in Date:</label>
        <input type="date" id="checkInDate" value={checkInDate} onChange={handleCheckInDateChange} required />
        <br /><br /><br /><br />
        <label htmlFor="checkOutDate">Check-out Date:</label>
        <input type="date" id="checkOutDate" value={checkOutDate} onChange={handleCheckOutDateChange} required />
        <br /><br /><br /><br />
        <button type="submit">Book Now</button>
        <br />
      </form>
    </div>
  );
};

export default BookingForm;
