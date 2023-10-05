import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import healthcare from '../../src/assets/healthcare.png'
import user from '../assets/user.png'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Navigator.scss';
import { useState } from 'react';


interface NavigatorProps{
    clickDashboard: (event: React.MouseEvent<HTMLButtonElement>) => void;
    clickFeedback: (event: React.MouseEvent<HTMLButtonElement>) => void;
    clickWarning: (event: React.MouseEvent<HTMLButtonElement>) => void;
    clickUser: (event: React.MouseEvent<HTMLButtonElement>) => void;


}
function Navigator(props:NavigatorProps){
    const [menuOpen, setMenuOpen] = useState(false);
    const {clickDashboard, clickFeedback, clickWarning, clickUser} = props
 
    function clickMenu(){
        setMenuOpen(!menuOpen);
    }

    return<div className='navi'>
        <div className='head'>
        <img src={healthcare} className='logo' alt=''/>
        <p className='user'>Hi, Doris</p>
        </div>
        <div className='menu'>
        <div className='naviBTNDesktop'>
        <Button className='naviBTN' onClick={clickDashboard} sx={{color:'white'} }>Dashboard</Button>
        <Button className='naviBTN'onClick={clickFeedback}sx={{color:'white'}}>Feedback</Button>
        <Button className='naviBTN'onClick={clickWarning}sx={{color:'white'}}>Warning</Button>
        <IconButton onClick={clickUser}> <img src={user} height='48px' alt=''/></IconButton>
        </div>
        <IconButton className='menuBTN' onClick={clickMenu}> {!menuOpen?<MenuOutlinedIcon sx={{color:'white'}} className='menuIcon'/>:<CloseOutlinedIcon sx={{color:'white'}} className='closeIcon'/>}</IconButton>
        {menuOpen&&<div className='naviBTNMenu'>
        <Button className='naviBTN' onClick={clickDashboard} sx={{color:'white'} }>Dashboard</Button>
        <Button className='naviBTN'onClick={clickFeedback}sx={{color:'white'}}>Feedback</Button>
        <Button className='naviBTN'onClick={clickWarning}sx={{color:'white'}}>Warning</Button>
        <IconButton onClick={clickUser}> <img src={user} height='48px' alt=''/></IconButton>
        </div>}
        </div>
        </div>
}
export default Navigator;