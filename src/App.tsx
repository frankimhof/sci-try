import React, { useEffect } from 'react';
import { NumericAxis } from 'scichart/Charting/Visuals/Axis/NumericAxis';
import {SciChartSurface} from "scichart/Charting/Visuals/SciChartSurface";
import './App.css';

const initSciChart = async () => {
  //uncomment next line and insert your license key
  //SciChartSurface.setRuntimeLicenseKey(<licensekey>)
  const {sciChartSurface, wasmContext} = await SciChartSurface.create("scichart-root"); 
  const xAxis = new NumericAxis(wasmContext);
  const yAxis = new NumericAxis(wasmContext);
  sciChartSurface.xAxes.add(xAxis);
  sciChartSurface.yAxes.add(yAxis);
}


function App() {
  useEffect(() => {
    initSciChart();
  }, []);

  return (
    <div className="App">
      <div id="scichart-root" style={{ maxWidth: 900}} />
    </div>
  );
}

export default App;
