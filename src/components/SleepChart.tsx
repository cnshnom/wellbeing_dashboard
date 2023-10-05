import React, { useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
function SleepChart(){
   
        const data  = [{day:'Mon',value:8},{day:'Tue',value:6},{day:'Wed',value:6},{day:'Thu',value:6},{day:'Fri',value:5},{day:'Sat',value:6},{day:'Sun',value:5}]
    
    return<ResponsiveContainer className="sleepChart" width="100%" height="100%"><LineChart data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <XAxis dataKey="day" stroke='#FFFFFF'/>
    <YAxis dataKey="value" stroke='#FFFFFF'/>
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="value" stroke="#00e5ff" />
  </LineChart>
  </ResponsiveContainer>
}
export default SleepChart;