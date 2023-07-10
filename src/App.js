import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import HotelList from '../src/components/HotelList/HotelList';
import SearchForm from '../src/components/SearchForm/SearchForm';
import HotelPage from './components/HotelPage/HotelPage';
import Booked from './components/Booked/Booked';
import ProductDetail from './components/ProductDetail/ProductDetail';
import BookingForm from './components/Booking Form/BookingForm';

const App = () => {


  return (
    <div>
  <BrowserRouter>
      <Routes>
          <Route exact path="" element ={<SearchForm/>}/>
          <Route exact path='/HotelList' element ={<HotelList/>} />
          <Route exact path='/HotelPage' element ={<HotelPage/>} />
          <Route exact path='/Booked' element ={<Booked/>} />
          <Route exact path="/Product/:id" element ={<ProductDetail/>} />
          <Route exact path="/BookingForm" element ={<BookingForm/>} />
       </Routes>
  </BrowserRouter>
    </div>
  );
};

export default App;
