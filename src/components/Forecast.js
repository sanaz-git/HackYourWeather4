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

  const fetchData = () => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.list.map((item) => {
          return {
            dates: item.dt_txt,
            temp: item.main.temp,
          };
        });
        setNewData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {newData.cnt}

      {/* <div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={newData}
            margin={{
              top: 30,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#945cb4"
              fill="#d0b9f5"
            />
            <XAxis dataKey="dates" tick={{ fill: '#282c34' }} />
            <YAxis
              dataKey="temp"
              tick={{ fontSize: 15, fill: '#282c34' }}
              tickFormatter={(temp) => `${temp} °C`}
            />
            <Tooltip />
            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.1}
              vertical={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div> */}

      {/* <div>
          {newData.list.map((item, index) => (
            <div key={index}>
              <p> temp : {item.main.temp}</p>
              <p>date :{item.dt_txt}</p>
            </div>
          ))}
        </div> */}

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Forecast;

// https://hackernoon.com/how-to-create-and-deploy-a-create-react-app-with-recharts-the-wikiquotes-api-and-a-data-set-1f3a90fccb2d
