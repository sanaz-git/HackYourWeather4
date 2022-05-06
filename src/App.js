import React from 'react';
import './App.css';
import City from './components/City';
import Forecast from './components/Forecast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h2>Weather</h2>
        {/* <City /> */}

        <Routes>
          <Route path="/" exact element={<City />} />
          <Route path="/forecast/:cityId" element={<Forecast />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
