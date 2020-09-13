import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import Card from '../Card/Card';

const data = [
  {
    name: 'GB (20.-27.11.1989)', "Sehr dafür": 16, "Eher dafür als dagegen": 32, "Eher dagegen als dafür": 29, "Sehr dagegen": 23,
  },
  {
    name: 'MD (4.12.1989)', "Sehr dafür": 39, "Eher dafür als dagegen": 36, "Eher dagegen als dafür": 13, "Sehr dagegen": 12,
  },
  {
    name: 'GB (29.1.-9.2.1990)', "Sehr dafür": 40, "Eher dafür als dagegen": 39, "Eher dagegen als dafür": 15, "Sehr dagegen": 6,
  },
  {
    name: 'MD (12.2.1990)', "Sehr dafür": 72, "Eher dafür als dagegen": 20, "Eher dagegen als dafür": 6, "Sehr dagegen": 2,
  }
];

export default class StackedAreaChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  render() {
    return (
      <Card title="'Wie stehen Sie zu einer Vereinigung von DDR und BRD?'">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis interval={0} angle={0} dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Sehr dafür" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Eher dafür als dagegen" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Eher dagegen als dafür" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="Sehr dagegen" stackId="1" stroke="#000" fill="#000" />
          <Legend />
        </AreaChart>
      </Card>
    );
  }
}
