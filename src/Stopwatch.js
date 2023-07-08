import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let interval;
    if (start) interval = setInterval(() => setTime(time + 100), 100);
    return () => clearInterval(interval);
  }, [start, time]);
  return (
    <div>
      <div>
        {(time / (1000 * 60)).toFixed(0)}:{(time / 1000).toFixed(0)}:
        {time % 1000}
      </div>
      <button onClick={() => setStart(true)} disabled={start}>
        Start
      </button>
      <button onClick={() => setStart(false)} disabled={!start}>
        Pause
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
};

export default Stopwatch;
