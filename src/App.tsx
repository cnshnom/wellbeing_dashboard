import './App.scss';
import Navigator from './components/Navigator';
import Dashboard from './components/Dashboard';
import { MouseEvent, useState } from 'react';
import Feedback from './components/Feedback';



function App() {
  
  const [isDashboard, setDashboard] = useState(true);
    const [isFeedback, setFeedback] = useState(false);
    function clickDashboard(){
        setDashboard(true);
    }
    function clickFeedback(){
        setFeedback(true);
        setDashboard(false);
    }
  return (
    <div className='img'>
    <div className="glass">
     <Navigator clickDashboard={clickDashboard} clickFeedback={clickFeedback}></Navigator>
    {isDashboard && <Dashboard />}
    {isFeedback && <Feedback />}
    </div>
    </div>
  );
}

export default App;
