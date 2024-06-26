import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const CustomBarGraph = ({ data, xAxisKey, barKeys, colors }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {barKeys.map((key, index) => (
          <Bar key={key} dataKey={key} fill={colors[index]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CustomBarGraph;
