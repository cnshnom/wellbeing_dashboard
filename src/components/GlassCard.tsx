import './GlassCard.scss';
import LineChart from './LineChart';
interface GlassCardProps{
    linechart?: React.ReactNode;
    img?:string;
    text:string;
    number?:string;
    className?:string;
}

function GlassCard(props:GlassCardProps){
    const {linechart,img,text,number,className} = props;
    return <div className={"card glass "+className} >
        <p className='text'>{text}</p>
        {img&&<img src={img} width='200px' height='200px' className='img' alt=''/>}
        {number&&<div className="number">{number}</div>}
        {linechart&&<LineChart/>}
    </div>;
}
export default GlassCard;