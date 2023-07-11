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
      price: '200',
    },
    {
      id: 2,
      thumbnail: 'https://raw.githubusercontent.com/jeff-lent/exotourista/main/PearlContinental-Karachi.jpg',
      name: 'Hotel 2',
      description: 'This is the short description of Hotel 2.',
      city: 'City 2',
      hasPool: false,
      experienceLevel: 'Budget',
      price: '100',
    },
    {
      id: 3,
      thumbnail: 'https://raw.githubusercontent.com/jeff-lent/exotourista/main/CentaurusHotelSuites-Islamabad.jpg',
      name: 'Hotel 3',
      description: 'This is the short description of Hotel 3.',
      city: 'City 3',
      hasPool: true,
      experienceLevel: 'Luxury',
      price: '300',
    },
    {
      id: 4,
      thumbnail: 'https://raw.githubusercontent.com/jeff-lent/exotourista/main/HotelSwiss-Karachi.png',
      name: 'Hotel 4',
      description: 'This is the short description of Hotel 1.',
      city: 'City 1',
      hasPool: true,
      experienceLevel: 'Luxury',
      price: '200',
    },
    {
      id: 5,
      thumbnail: 'https://raw.githubusercontent.com/jeff-lent/exotourista/main/StarGuestHouse-Karachi.jpg',
      name: 'Hotel 5',
      description: 'This is the short description of Hotel 1.',
      city: 'City 1',
      hasPool: true,
      experienceLevel: 'Luxury',
      price: '800',
    },
    {
      id: 6,
      thumbnail: 'https://raw.githubusercontent.com/jeff-lent/exotourista/main/12thAvenue-Lahore.jpg',
      name: 'Hotel 6',
      description: 'This is the short description of Hotel 1.',
      city: 'City 1',
      hasPool: true,
      experienceLevel: 'Luxury',
      price: '200',
    },
    {
      id: 7,
      thumbnail: 'https://raw.githubusercontent.com/jeff-lent/exotourista/main/HiltonSuites-Lahore.jpg',
      name: 'Hotel 7',
      description: 'This is the short description of Hotel 1.',
      city: 'City 1',
      hasPool: true,
      experienceLevel: 'Luxury',
      price: '200',
    },
    {
      id: 8,
      thumbnail: 'https://raw.githubusercontent.com/jeff-lent/exotourista/main/HiltonSuites-Lahore.jpg',
      name: 'Hotel 9',
      description: 'This is the short description of Hotel 1.',
      city: 'City 1',
      hasPool: true,
      experienceLevel: 'Luxury',
      price: '200',
    }


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
