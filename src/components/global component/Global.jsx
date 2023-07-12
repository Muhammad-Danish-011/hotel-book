import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Global= () => {
  const [city, setCity] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [poolRequired, setPoolRequired] = useState(false);
  const navigate = useNavigate();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleExperienceLevelChange = (event) => {
    setExperienceLevel(event.target.value);
  };

  const handlePoolRequiredChange = () => {
    setPoolRequired(!poolRequired);
  };

  const handleSearch = () => {
    navigate ("/HotelList");
   
  };

  return (
    <div className='Global'>
    <label htmlFor="city">City:</label>
    <select id="city" value={city} onChange={handleCityChange}>
      <option value="">Select a city</option>
      <option value="Karachi">Karachi</option>
      <option value="Islamabad">Islamabad</option>
      <option value="Lahore">Lahore</option>
    </select>
    
    <label htmlFor="experienceLevel">Experience Level:</label>
    <select id="experienceLevel" value={experienceLevel} onChange={handleExperienceLevelChange}>
      <option value="">Select an experience level</option>
      <option value="Budget">Budget</option>
      <option value="Business">Business</option>
      <option value="Luxury">Luxury</option>
    </select>
    
    <label htmlFor="poolRequired">Pool required:</label>
    
    <input
      id="poolRequired"
      type="checkbox"
      checked={poolRequired}
      onChange={handlePoolRequiredChange}
    />
   
    <button onClick={handleSearch}>Search</button>
  </div>
);
};

export default Global;
