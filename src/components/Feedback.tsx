import { IconButton } from '@mui/material';
import microphone from '../assets/microphone.png';
import './Feedback.scss'


function Feedback(){
    return<div className="wrapper">
        <div className="container glass">
            <p className='feedbackText'>Feedback</p>
        <div className="feedback glass">
        <IconButton className='microphone'><img src={microphone}></img></IconButton>
       
        </div>
        <p className='ask'>Any problems at work?</p>
        </div>
    </div>;
}
export default Feedback;