import './App.scss';
import Navigator from './components/Navigator';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import Feedback from './components/Feedback';
import HealthData from './components/HealthData';



function App() {
  
  const [isDashboard, setDashboard] = useState(true);
    const [isFeedback, setFeedback] = useState(false);
    const [isHealthData, setHealthData] = useState(false)
    const [isCheck,setCheck]=useState(false);
    const [isWork, setWork] = useState(false);
    function clickDashboard(){
        setDashboard(true);
        setFeedback(false);
    }
    function clickFeedback(){
        setFeedback(true);
        setDashboard(false);
    }
    function clickHealthData(){
      setHealthData(true);
      setDashboard(false);
      setFeedback(false);
      setWork(false);
      setCheck(false);
      setHealthData(false);
    }
    function clickCheck(){
      setCheck(true);
      setWork(false);
      setHealthData(false);
      setDashboard(false);
      setFeedback(false);
    }
    function clickWork(){
      setWork(true);
      setCheck(false);
      setHealthData(false);
      setDashboard(false);
      setFeedback(false);
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
