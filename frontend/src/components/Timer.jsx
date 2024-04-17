import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function calculateTimeRemaining(deadline) {
    const currentDate = new Date();
    const targetDate = new Date(currentDate);
    targetDate.setHours(deadline[0]);
    targetDate.setMinutes(deadline[1]);

    let timeDiff = targetDate.getTime() - currentDate.getTime();
    if (timeDiff < 0) {
      timeDiff += 24 * 60 * 60 * 1000; // Add 24 hours if the deadline is passed
    }

    const remainingHours = Math.floor(timeDiff / (60 * 60 * 1000));
    const remainingMinutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
    const remainingSeconds = Math.floor((timeDiff % (60 * 1000)) / 1000);

    setHours(remainingHours);
    setMinutes(remainingMinutes);
    setSeconds(remainingSeconds);

    if (remainingHours === 0 && remainingMinutes === 0 && remainingSeconds === 0) {
      alert('Timer has reached 0!');
    }
  }

  useEffect(() => {
    const deadlineArray = props.time.split(":");
    const interval = setInterval(() => calculateTimeRemaining(deadlineArray), 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className='timer-part'>
      <p>Remaining Time</p>
      <p className='actual-timer'>
        <span className='timer'>{formatTime(hours)}</span>:
        <span className='timer'>{formatTime(minutes)}</span>:
        <span className='timer'>{formatTime(seconds)}</span>
      </p>
    </div>
  );
};

export default Timer;
