import React from 'react';
import Global from '../global component/Global';
import { useLocation } from 'react-router-dom';

const Booked = () => {

  const location = useLocation();

  const obj = location.state
  

  return (
    <div className="book">
      <Global/>
            <h2> HOTEL BOOKED SUCCESSFULLY </h2>
            <h2>Thanks and Enjoy your booking</h2><br /><br /><br />
            <p>Total Nights:{obj.totalNights}</p>
            <p>Total Price:${obj.totalPrice}</p>
            

    </div>
  );
};

export default Booked;
