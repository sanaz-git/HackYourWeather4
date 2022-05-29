import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
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
    <div className="forecastPage">
      <h2 className="h22">5 Days Forecast</h2>

      <div className="forecastChart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={newData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <XAxis
              dataKey="date"
              axisLine={true}
              tickLine={true}
              tick={{ fontSize: 12, fill: 'black' }}
            />
            <YAxis
              dataKey="temp"
              axisLine={true}
              tickLine={true}
              tick={{ fontSize: 12, fill: 'black' }}
              tickFormatter={(temp) => `${temp}°C`}
            />
            <Tooltip />
            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.1}
              vertical={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <Link to="/">
        <button className="back">Back to Home</button>
      </Link>
    </div>
  );
};

export default Forecast;
