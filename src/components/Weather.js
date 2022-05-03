import React from 'react';

const Weather = ({ info, deleteItem }) => {
  return (
    <div className="allInfo">
      <ul>
        <li>
          <div className="button">
            <button
              className="deleteButton"
              id={info.weather[0].id}
              onClick={deleteItem}
            >
              x
            </button>
          </div>

          <h2>
            {info.name},{info.sys.country}
          </h2>
          <h3>{info.weather[0].main}</h3>
          <p className="des">
            {info.weather[0].description}
            <img
              src={`https://openweathermap.org/img/w/${info.weather[0].icon}.png`}
              alt="img"
            />
          </p>
          <p>temp_min: {Math.round(info.main.temp_min)} &#8451;</p>
          <p>temp_max: {Math.round(info.main.temp_max)} &#8451;</p>
          <p>
            lon: {info.coord.lon.toFixed(2)} , lat:
            {info.coord.lat.toFixed(2)}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Weather;
