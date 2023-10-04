import './Login.scss'
import Envelope from '../assets/envelope.png'
import Eye from '../assets/eye.png'

function Feedback(){
    return<div className="wrapper">
        <div className="container glass">
            <p className='loginText'>Login</p>
            <div className='typeIn'><p className='text'>Email</p><input type='text'/><img className='loginImg' src={Envelope}/></div>
            <div className='typeIn'><p className='text'>Password</p><input type='text'/><img className='loginImg' src={Eye}/></div>
            <button className='glass-button'>login</button>
        </div>
    </div>;
}
export default Feedback;