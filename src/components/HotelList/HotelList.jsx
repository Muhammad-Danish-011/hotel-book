import React from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import Global from '../global component/Global';

const HotelList = ({ hotels }) => {

    const navigate = useNavigate();

  const handleBookNow = (hotel) => {
    console.log(`Book Now clicked for ${hotel}`);
    navigate ("/BookingForm", {state:hotel});
  };

  return (
    <div className="hotel-list">
        <Global/>
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotel-item">
          <img src={hotel.thumbnail} alt={hotel.name} className="thumbnail" />
          <div className="hotel-info">
          <Link to={`/product/${hotel.id}`}>
              <h2>{hotel.name}</h2>
            </Link>
            <p>{hotel.description}</p>
            <p>City: {hotel.city}</p>
            <p>Pool: {hotel.hasPool ? 'Yes' : 'No'}</p>
            <p>Experience Level: {hotel.experienceLevel}</p>
            <p>Price per night: {hotel.price}</p>
            <button onClick={() => handleBookNow(hotel)}>Book Now</button>
          </div>
        </div>
      ))}
      
    
    </div>
  );
};

export default HotelList;
