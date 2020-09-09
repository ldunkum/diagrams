import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from 'components/Header/Header';
import SimpleLineChart from 'components/SimpleLineChart/SimpleLineChart';
import SynchronizedLineChart from 'components/SynchronizedLineChart/SynchronizedLineChart';
import SimpleBarChart from 'components/SimpleBarChart/SimpleBarChart';
import BrushBarChart from "components/BrushBarChart/BrushBarChart";
import CustomActiveShapePieChart from "components/CustomActiveShapePieChart/CustomActiveShapePieChart";

function App() {
  return (
    <div className="App">
      <Header/>
      <SimpleLineChart/>
      <SynchronizedLineChart/>
      <SimpleBarChart/>
      <BrushBarChart/>
      <CustomActiveShapePieChart />
    </div>
  );
}

export default App;
