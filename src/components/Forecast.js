import React from 'react';
import { Link } from 'react-router-dom';

function Forecast() {
  return (
    <div>
      Forecast
      <Link to="/city">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Forecast;
