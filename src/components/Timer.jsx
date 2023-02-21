import React, { useEffect } from "react";
import useSound from "use-sound";
import wrong from "../sounds/wrong.mp3";

function Timer({ setStop, setTimer, timer }) {
  const [playWrong] = useSound(wrong);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setTimer]);

  useEffect(() => {
    if (timer === 0) {
      playWrong();
      setStop(true);
    }
    if (timer > 100) {
      let timerClass = document.querySelector(".timer");
      timerClass.style.opacity = 0;
    } else {
      let timerClass = document.querySelector(".timer");
      timerClass.style.opacity = 1;
    }
  }, [timer, playWrong, setStop]);

  return (
    <div className="timer">
      <div className="countDown">
        <h2>{timer}</h2>
      </div>
    </div>
  );
}

export default Timer;
