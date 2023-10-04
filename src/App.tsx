import './App.scss';
import Navigator from './components/Navigator';
import Dashboard from './components/Dashboard';
import { MouseEvent, useState } from 'react';
import Feedback from './components/Feedback';
import HealthData from './components/HealthData';
import Warning from './components/Warning';
import Login from './components/Login';


function App() {
const [isDashboard, setIsDashboard] = useState(true);
const [isFeedback, setIsFeedback] = useState(false);
const [isHealthData, setHealthData] = useState(false);
const [isWork, setIsWork] = useState(false);
const [isCheck, setIsCheck] = useState(false);
const [isWarn, setIsWarn] = useState(false);
const [isUser, setUser] = useState(false);

    function clickDashboard(){
      setIsDashboard(true);
      setIsFeedback(false);
      setIsWarn(false);
      setUser(false);

      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);
    }
    function clickFeedback(){
      setIsDashboard(false);
      setIsFeedback(true);
      setIsWarn(false);
      setUser(false);


      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);

    }

    function clickWarning(){
      setIsDashboard(false);
      setIsFeedback(false);
      setIsWarn(true);
      setUser(false);

      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);
    }

    function clickUser(){
      setIsDashboard(false);
      setIsFeedback(false);
      setIsWarn(false);
      setUser(true);

      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);
    }
    
    function clickHealthData(){
      setIsDashboard(false);
      setIsFeedback(false);
      setIsWarn(false);
      setUser(false);


      setHealthData(true);
      setIsWork(false);
      setIsCheck(false);


    }
    function clickCheck(){
      setIsDashboard(true);
      setIsFeedback(false);
      setIsWarn(false);
      setUser(false);


      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);

    }
    function clickWork(){
      setIsDashboard(true);
      setIsFeedback(false);
      setIsWarn(false);
      setUser(false);


      setHealthData(false);
      setIsWork(false);
      setIsCheck(false);

    }
   
  return (
    <div className='img'>
    <div className="glass">
     <Navigator clickDashboard={clickDashboard} clickFeedback={clickFeedback} clickWarning={clickWarning} clickUser={clickUser}></Navigator>
    {isDashboard && <Dashboard clickHealthData={clickHealthData} clickCheck={clickCheck} clickWork={clickWork}/>}
    {isFeedback && <Feedback />}
    {isWarn && <Warning/>}
    {isUser && <Login />}
    {isHealthData && <HealthData/>}
    </div>
    </div>
  );
}

export default App;
