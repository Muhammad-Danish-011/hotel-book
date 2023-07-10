import React from 'react';
import BookingForm from '../Booking Form/BookingForm';
import Global from '../global component/Global';
const ProductDetail = ({  match  }) => {
    const productId = match.params.id;
  return (
    
    <div className="product-detail">
        <Global/>
      <h2>Product Detail</h2>
      <p></p>
      
      <BookingForm roomRate ={""} />
    </div>
  );
};

export default ProductDetail;
