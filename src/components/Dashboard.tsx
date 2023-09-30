import GlassBTN from '../components/GlassBTN';
import healthData from '../assets/healthData.png'
import work from '../assets/work.png'
import doctor from '../assets/doctor.png'
import { Button } from '@mui/material';
import phone from '../assets/phone-call.png'
import warning from '../assets/warning.png'
import './Dashboard.scss'

const dataHandler = () =>{

}
const workHandler = () =>{

}
const CheckHandler = () =>{

}
function Dashboard(){
    return <div className='dashboard'>
         <div className='glassBTN'>
     <GlassBTN text='Health Data' img={healthData} onClickHandler={dataHandler}></GlassBTN>
     <GlassBTN text='Work Performance' img={work} onClickHandler={workHandler}></GlassBTN>
     <GlassBTN text='Health Check' img={doctor} onClickHandler={CheckHandler}></GlassBTN>
     </div>

    <div className='safetyBTN'>
     <Button  sx={{ height:'80px', color:'white'}} className='phoneBTN glass'><img src={phone} className='phone'/> <p>SOS Call</p></Button>
     <Button  sx={{ height:'80px', color:'white'}} className='phoneBTN glass'><img src={warning} className='phone'/> <p>Warning</p></Button>
    </div>
    </div>;
}
export default Dashboard;