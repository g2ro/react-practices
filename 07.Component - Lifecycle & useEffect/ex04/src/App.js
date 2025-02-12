import React, { useState, useEffect } from 'react';
import './assets/scss/App.scss';
import Clock from './Clock';

export default function App() {
  const getCurrentTime = () => {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime);
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(getCurrentTime);
      setTicks((prevTicks) => prevTicks + 0.5);
    }, 1000);
  }, []);

  return ticks % 10 === 1 ? null : (
    <Clock
      title={`ex04: Clock Component II: ${ticks}`}
      hours={currentTime.hours}
      minutes={currentTime.minutes}
      seconds={currentTime.seconds}
    />
  );
}
