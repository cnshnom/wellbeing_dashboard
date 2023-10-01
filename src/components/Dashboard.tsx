import GlassBTN from '../components/GlassBTN';
import healthData from '../assets/healthData.png'
import work from '../assets/work.png'
import doctor from '../assets/doctor.png'
import { Button } from '@mui/material';
import phone from '../assets/phone-call.png'
import warning from '../assets/warning.png'
import './Dashboard.scss'

interface DashboardProps{
    clickHealthData: (event: React.MouseEvent<HTMLButtonElement>) => void;
    clickWork: (event: React.MouseEvent<HTMLButtonElement>) => void;
    clickCheck: (event: React.MouseEvent<HTMLButtonElement>) => void;

}

function Dashboard(props:DashboardProps){
    const{clickHealthData, clickWork, clickCheck} = props;
    return <div className='dashboard'>
         <div className='glassBTN'>
     <GlassBTN text='Health Data' img={healthData} onClickHandler={clickHealthData}></GlassBTN>
     <GlassBTN text='Work Performance' img={work} onClickHandler={clickWork}></GlassBTN>
     <GlassBTN text='Health Check' img={doctor} onClickHandler={clickCheck}></GlassBTN>
     </div>

    <div className='safetyBTN'>
     <Button  sx={{ height:'80px', color:'white'}} className='phoneBTN glass'><img src={phone} className='phone' alt=''/> <p>SOS Call</p></Button>
     <Button  sx={{ height:'80px', color:'white'}} className='phoneBTN glass'><img src={warning} className='phone' alt=''/> <p>Warning</p></Button>
    </div>
    </div>;
}
export default Dashboard;