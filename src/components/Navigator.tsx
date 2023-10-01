import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import healthcare from '../../src/assets/healthcare.png'
import user from '../assets/user.png'
import './Navigator.scss';


interface NavigatorProps{
    clickDashboard: (event: React.MouseEvent<HTMLButtonElement>) => void;
    clickFeedback: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
function Navigator(props:NavigatorProps){

    const {clickDashboard, clickFeedback} = props
    return<div className='navi'>
        <div className='head'>
        <img src={healthcare} className='logo' alt=''/>
        <p className='user'>Hi, Doris</p>
        </div>
        <div className='naviBTN'>
        <Button className='naviBTN' onClick={clickDashboard} sx={{color:'white'} }>Dashboard</Button>
        <Button className='naviBTN'onClick={clickFeedback}sx={{color:'white'}}>Feedback</Button>
        <IconButton> <img src={user} height='48px' alt=''/></IconButton>
        </div>
        </div>
}
export default Navigator;