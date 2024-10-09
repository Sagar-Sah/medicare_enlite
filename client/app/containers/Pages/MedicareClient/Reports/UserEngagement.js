import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import data from './data.json';

const UserEngagement = () => {
  const engagementData = data.userEngagementData;

  return (
    <div>
      <h2>User Engagement Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={engagementData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="activeUsers" fill="#8884d8" />
          <Bar dataKey="newUsers" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserEngagement;
