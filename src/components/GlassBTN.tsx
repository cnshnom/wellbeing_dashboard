import './GlassBTN.scss';
import { Button } from '@mui/material';

interface GlassBTNProps{
    img:string;
    text:string;
    onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function GlassBTN(props:GlassBTNProps){
    const {img,text, onClickHandler} = props;
    return <Button sx={{color:'white'}} className="btn glass" onClick={onClickHandler}>
        <p className='text'>{text}</p>
        <img src={img} width='60px' height='60px' className='img'/>

    </Button>;
}
export default GlassBTN;