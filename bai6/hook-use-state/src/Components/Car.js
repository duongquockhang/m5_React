import React, { useState } from 'react';
// import './App.css';

function Car() {
  const [selectedCar, setSelectedCar] = useState({ car: '', color: '' });

  const carList = ['BMW', 'Mercedes', 'Audi'];
  const colorList = ['Red', 'Green', 'Blue'];

  const handleCarSelection = (e) => {
    setSelectedCar((prevState) => ({ ...prevState, car: e.target.value }));
  };

  const handleColorSelection = (e) => {
    setSelectedCar((prevState) => ({ ...prevState, color: e.target.value }));
  };

  return (
    <div className="App">
      <label>
        Select a car:
        <select value={selectedCar.car} onChange={handleCarSelection}>
          {carList.map((car) => (
            <option key={car} value={car}>
              {car}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Select a color:
        <select value={selectedCar.color} onChange={handleColorSelection}>
          {colorList.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </label>
      <br />
      <p>You have selected {selectedCar.color} {selectedCar.car}</p>
    </div>
  );
}

export default Car;