import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    setCount(0);
    if (!isRunning) {
      const id = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  const resumeTimer = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ms-5">
      <div className="card text-center shadow-lg" style={{ width: "350px" }}>
        <div className="card-header bg-primary text-white fs-4 fw-bold py-3">
          ⏱ Timer App
        </div>

        <div className="card-body">
          <h1 className="display-4 fw-bold text-primary">{count}</h1>
          <p className="text-secondary">Seconds Passed</p>

          <div className="d-flex justify-content-center mt-4 flex-wrap">
            <button
              className="btn btn-success m-2 px-4"
              onClick={startTimer}
              disabled={isRunning}
            >
              Start
            </button>

            <button
              className="btn btn-warning m-2 px-4"
              onClick={resumeTimer}
              disabled={isRunning}
            >
              Resume
            </button>

            <button
              className="btn btn-danger m-2 px-4"
              onClick={stopTimer}
              disabled={!isRunning}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
