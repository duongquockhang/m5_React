import React, { useState, useEffect } from 'react';

function Timer() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      alert("Time's up");
    }
  }, [timer]);

  return (
    <div>
      <h1>Countdown Timer: {timer}</h1>
    </div>
  );
}

export default Timer;