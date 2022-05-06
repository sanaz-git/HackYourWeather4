import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

function Forecast() {
  // const [newData, setNewData] = useState({});

  // const { cityId } = useParams();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityId}n&units=metric&appid=${API_KEY}`;
  //   console.log(url);

  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setNewData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <h2>hello</h2>
    </div>

    // <div>
    //   Forecast
    //   <Link to="/">
    //     <button>Back to Home</button>
    //   </Link>
    // </div>
  );
}

export default Forecast;
