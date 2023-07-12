import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';



const BookingForm = ({ roomRate }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

const a = location.state;


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
  const calculateTotalNights = () => {
    const arrival = new Date(checkInDate);
    const departure = new Date(checkOutDate);
    const totalNights = Math.ceil((departure - arrival) / (1000 * 60 * 60 * 24));
    return totalNights;
  };
  const calculateTotalPrice = () => {
    const pricePerNight = a.price;
    const totalNights = calculateTotalNights();
    return pricePerNight * totalNights;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a payload object with the data to be inserted
    const payload = {
      name: name,
      address: address,
      email: email,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    
    };

    fetch('http://localhost:8082/Bookings/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
      
        console.log('Data inserted successfully');
      })
      .catch(error => {
        console.error('Error inserting data:', error);
      });
      const totalPrice = calculateTotalPrice();
      const totalNights = calculateTotalNights();
      navigate("/booked", {state: {
        totalNights: totalNights,
        totalPrice: totalPrice,
    }});
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
