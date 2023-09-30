import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import healthcare from '../../src/assets/healthcare.png'
import user from '../assets/user.png'
import './Navigator.scss';

function Navigator(){
    return<div className='navi'>
        <div className='head'>
        <img src={healthcare} className='logo'/>
        <p className='user'>Hi, Doris</p>
        </div>
        <div className='naviBTN'>
        <Button className='naviBTN' sx={{color:'white'}}>Dashboard</Button>
        <Button className='naviBTN'sx={{color:'white'}}>Feedback</Button>
        <IconButton> <img src={user} height='48px'/></IconButton>
        </div>
        </div>
}
export default Navigator;