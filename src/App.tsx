import './App.scss';
import Navigator from './components/Navigator';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import Feedback from './components/Feedback';
import HealthData from './components/HealthData';


function App() {
const [isDashboard, setIsDashboard] = useState(true);
const [isFeedback, setIsFeedback] = useState(false);
const [isHealthData, setHealthData] = useState(false);
const [isWork, setIsWork] = useState(false);
const [isCheck, setIsCheck] = useState(false);
    function clickDashboard(){
      setIsDashboard(true);
      setIsFeedback(false);
      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);
    }
    function clickFeedback(){
      setIsDashboard(false);
      setIsFeedback(true);
      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);
    }
    function clickHealthData(){
      setIsDashboard(false);
      setIsFeedback(false);
      setHealthData(true);
      setIsWork(false);
      setIsCheck(false);

    }
    function clickCheck(){
      setIsDashboard(false);
      setIsFeedback(false);
      setHealthData(false);
      setIsWork(false);
      setIsCheck(true);

    }
    function clickWork(){
      setIsDashboard(false);
      setIsFeedback(false);
      setHealthData(false);
      setIsWork(true);
      setIsCheck(false);

    }
  return (
    <div className='img'>
    <div className="glass">
     <Navigator clickDashboard={clickDashboard} clickFeedback={clickFeedback}></Navigator>
    {isDashboard && <Dashboard clickHealthData={clickHealthData} clickCheck={clickCheck} clickWork={clickWork}/>}
    {isFeedback && <Feedback />}
    {isHealthData && <HealthData/>}
    </div>
    </div>
  );
}

export default App;
