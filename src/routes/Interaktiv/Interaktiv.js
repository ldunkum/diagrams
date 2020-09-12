import React from 'react';
import SimpleLineChart from 'components/SimpleLineChart/SimpleLineChart';
import SynchronizedLineChart from 'components/SynchronizedLineChart/SynchronizedLineChart';
import SimpleBarChart from 'components/SimpleBarChart/SimpleBarChart';
import BrushBarChart from "components/BrushBarChart/BrushBarChart";
import CustomActiveShapePieChart from "components/CustomActiveShapePieChart/CustomActiveShapePieChart";

export default function Interaktiv () {
    return (
      <div className="App">
        <SimpleLineChart/>
        <SynchronizedLineChart/>
        <SimpleBarChart/>
        <BrushBarChart/>
        <CustomActiveShapePieChart />
      </div>
    );
}
