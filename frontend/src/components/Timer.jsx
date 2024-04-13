import React,{useState,useEffect} from 'react'

const Timer = (props) => {
    const [minutes,setMinutes]= useState(0)
    const [hours,setHours] = useState(0)
    const [seconds,setSeconds] = useState(0)

    function getTime(deadline){
        var currentdate = new Date();
        
        var hours=currentdate.getHours()-deadline[0]
        var minutes=currentdate.getMinutes()-deadline[1]
        var seconds=currentdate.getSeconds()
        if(currentdate.getHours()>deadline[0]){
            hours=24-(currentdate.getHours()-deadline[0])
        }

        setHours(Math.floor(Math.abs(hours)));
        setMinutes(Math.floor(Math.abs(minutes)))
        setSeconds(60-seconds)
    }

    useEffect(() => {
        
        const array=props.time.split(":")
        const interval = setInterval(() => getTime(array), 1000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div className='timer-part'>
            <p>Remaining Time</p>
            <p className='actual-timer'><span className='timer'>{hours}</span>:<span className='timer'>{minutes}</span>:<span className='timer'>{seconds}</span></p>
            
        </div>
    )
}

export default Timer