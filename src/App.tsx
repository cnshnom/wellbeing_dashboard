import './App.scss';
import Navigator from './components/Navigator';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div className='img'>
    <div className="glass">
     <Navigator></Navigator>
    <Dashboard/>
    </div>
    </div>
  );
}

export default App;
