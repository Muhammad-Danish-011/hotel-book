import React from 'react';
import HotelList from '../HotelList/HotelList';

const HotelPage = () => {
  const hotels = [
    {
      id: 1,
      thumbnail: 'https://raw.githubusercontent.com/jeff-lent/exotourista/main/HiltonSuites-Lahore.jpg',
      name: 'Hotel 1',
      description: 'This is the short description of Hotel 1.',
      city: 'City 1',
      hasPool: true,
      experienceLevel: 'Luxury',
      price: '$200',
    },
    {
      id: 2,
      thumbnail: 'https://raw.githubusercontent.com/jeff-lent/exotourista/main/PearlContinental-Karachi.jpg',
      name: 'Hotel 2',
      description: 'This is the short description of Hotel 2.',
      city: 'City 2',
      hasPool: false,
      experienceLevel: 'Budget',
      price: '$100',
    },
    // Add more hotel objects as needed
  ];

  return (
    <div>
      <h2>Hotel Page</h2>
      {hotels && hotels.length > 0 ? (
        <HotelList hotels={hotels} />
      ) : (
        <p>No hotels found.</p>
      )}
    </div>
  );
};

export default HotelPage;
