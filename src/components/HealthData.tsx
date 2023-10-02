import './HealthData.scss'
import GlassCard from './GlassCard';
import LineChart from './LineChart';

function HealthData(){
    const sleepHistory = <LineChart/>
    return <div className='data-wrapper'>
        <GlassCard className="glassData" number="80 bpm" text="Pulse"></GlassCard>
        <GlassCard className="glassData" number="36.8 C" text="Temperature"></GlassCard>
        <GlassCard className="glassData" number="110 mmHg"text="Blood Pressure"></GlassCard>
        <GlassCard className='glassStatics' linechart={sleepHistory}text={'Sleep hours History'}></GlassCard>

        
    </div>
}
export default HealthData;