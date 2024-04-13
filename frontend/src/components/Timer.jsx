import React,{useState,useEffect} from 'react'

const Timer = (props) => {
    const [minutes,setMinutes]= useState(0)
    const [hours,setHours] = useState(0)
    const [seconds,setSeconds] = useState(0)

    function getTime(deadline){
        var currentdate = new Date();
        const hours=currentdate.getHours()-deadline[0]
        const minutes=currentdate.getMinutes()-deadline[1]
        const seconds=currentdate.getSeconds()

        setHours(Math.floor((hours)));
        setMinutes(Math.floor(Math.abs(minutes)))
        setSeconds(60-seconds)
    }

    useEffect(() => {
        
        const array=props.time.split(":")
        const interval = setInterval(() => getTime(array), 1000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div>
            <p>Remaining Time</p>
            <span className='timer'>{hours}</span>:<span className='timer'>{minutes}</span>:<span className='timer'>{seconds}</span>
            
        </div>
    )
}

export default Timer