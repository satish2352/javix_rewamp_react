import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

const CustomBarGraph = ({ data, xAxisKey, barKey, colors }) => {
  // Map each unique X-axis value to a color
  const colorMap = {};
  let colorIndex = 0;

  // Assign a color to each unique X-axis value
  data.forEach(entry => {
    if (!colorMap[entry[xAxisKey]]) {
      colorMap[entry[xAxisKey]] = colors[colorIndex % colors.length];
      colorIndex++;
    }
  });

  // Create an array of legend data
  const legendData = Object.keys(colorMap).map(key => ({
    value: key,
    color: colorMap[key],
  }));

  return (
    <div style={{ width: '100%', height: 400 }}>
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
          <Legend 
            payload={legendData.map(item => ({
              id: item.value,
              type: 'square',
              value: item.value,
              color: item.color,
            }))}
          />
          <Bar dataKey={barKey}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorMap[entry[xAxisKey]]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomBarGraph;
