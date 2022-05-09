import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Forecast = () => {
  const [newData, setNewData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}`;
    console.log(url);

    try {
      const response = await fetch(url);
      const data = await response.json();

      const forecast = data.list.map((item) => {
        return {
          date: item.dt_txt,
          temp: Math.round(item.main.temp - 273.15).toFixed(2),
        };
      });
      setNewData(forecast);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="h22">5 days forecast</h2>

      <div>
        {
          <LineChart
            width={1000}
            height={400}
            data={newData}
            margin={{
              top: 10,
              right: 30,
              left: 30,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />
            <YAxis dataKey="temp" tickFormatter={(temp) => `${temp} °C`} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="date"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#B6024B"
              fill="#8884d8"
            />
          </LineChart>
        }
      </div>

      <Link to="/">
        <button className="backHome">Back to Home</button>
      </Link>
    </div>
  );
};

export default Forecast;
