import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import data from './data.json';

const BotPerformance = () => {
  const performanceData = data.performanceData[0].data;

  return (
    <div>
      <h6>Bot Performance Overview</h6>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="responses" stroke="#8884d8" />
          <Line type="monotone" dataKey="successRate" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BotPerformance;
