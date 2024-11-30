import React, { useEffect, useState } from 'react'
import "./Signals.css"
function Signals() {
  const [currentLight, setCurrentLight] = useState(0); // Tracks the active light
  const [isRunning, setIsRunning] = useState(false); // Start/stop the signal
  const [timeRemaining, setTimeRemaining] = useState(0); // Countdown for the active light

  const lights = ['red', 'yellow', 'green'];
  const lightDurations = [5, 2, 5]; // Durations (in seconds) for red, yellow, green lights

  // Start the signal and initialize the timer
  const toggleSignal = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setTimeRemaining(lightDurations[currentLight]); // Reset timer when starting
    }
  };

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === 1) {
          // Switch to the next light
          setCurrentLight((prevLight) => (prevLight + 1) % lights.length);
          return lightDurations[(currentLight + 1) % lights.length];
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount or stop
  }, [isRunning, currentLight, lightDurations]);

  return (
    <div className='app'>
      <h1>Time Remaining: {isRunning ? timeRemaining : '--'}s</h1>
      <div className='traffic-signal'>
        {lights.map((light, index) => (
          <div
            key={light}
            className={`light ${light} ${
              index === currentLight ? 'active' : ''
            }`}
          ></div>
        ))}
      </div>
      <button onClick={toggleSignal}>{isRunning ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default Signals