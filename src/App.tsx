import './App.scss';
import Navigator from './components/Navigator';
import Dashboard from './components/Dashboard';
import { MouseEvent, useState } from 'react';
import Feedback from './components/Feedback';
import HealthData from './components/HealthData';
import Warning from './components/Warning';


function App() {
const [isDashboard, setIsDashboard] = useState(true);
const [isFeedback, setIsFeedback] = useState(false);
const [isHealthData, setHealthData] = useState(false);
const [isWork, setIsWork] = useState(false);
const [isCheck, setIsCheck] = useState(false);
const [isWarn, setIsWarn] = useState(false);

    function clickDashboard(){
      setIsDashboard(true);
      setIsFeedback(false);
      setIsWarn(false);
      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);
    }
    function clickFeedback(){
      setIsDashboard(false);
      setIsFeedback(true);
      setIsWarn(false);

      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);

    }

    function clickWarning(){
      setIsDashboard(false);
      setIsFeedback(false);
      setIsWarn(true);

      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);
    }
    
    function clickHealthData(){
      setIsDashboard(false);
      setIsFeedback(false);
      setIsWarn(false);

      setHealthData(true);
      setIsWork(false);
      setIsCheck(false);


    }
    function clickCheck(){
      setIsDashboard(true);
      setIsFeedback(false);
      setIsWarn(false);

      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);

    }
    function clickWork(){
      setIsDashboard(true);
      setIsFeedback(false);
      setIsWarn(false);

      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);

    }
   
  return (
    <div className='img'>
    <div className="glass">
     <Navigator clickDashboard={clickDashboard} clickFeedback={clickFeedback} clickWarning={clickWarning}></Navigator>
    {isDashboard && <Dashboard clickHealthData={clickHealthData} clickCheck={clickCheck} clickWork={clickWork}/>}
    {isFeedback && <Feedback />}
    {isWarn && <Warning/>}
    {isHealthData && <HealthData/>}
    </div>
    </div>
  );
}

export default App;
