import Main from "./components/Main";
import Pyramid from "./components/Pyramid";
import "./App.css"
import { useEffect, useMemo, useState } from "react";
import useSound from 'use-sound';
import play from "./sounds/play.mp3"
import { data } from "./assets/data";
import Name from "./components/Name";

function App() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [amountWon, setAmountWon] = useState("0");
  const [stop, setStop] = useState(false);
  const [userName, setUserName] = useState('');
  const [submitUser, setSubmitUser] = useState(false);

  // eslint-disable-next-line
  const [letsPlay] = useSound(play);



  const pyramid = useMemo(() => {
    return [
      { id: 15, amount: "7,00,00,000" },
      { id: 14, amount: "1,00,00,000" },
      { id: 13, amount: "50,00,000" },
      { id: 12, amount: "25,00,000" },
      { id: 11, amount: "12,50,000" },
      { id: 10, amount: "6,40,000" },
      { id: 9, amount: "3,20,000" },
      { id: 8, amount: "1,60,000" },
      { id: 7, amount: "80,000" },
      { id: 6, amount: "40,000" },
      { id: 5, amount: "20,000" },
      { id: 4, amount: "10,000" },
      { id: 3, amount: "5000" },
      { id: 2, amount: "2000" },
      { id: 1, amount: "1000" }
    ];
  }, [])

  useEffect(() => {
    if (currentQuestionNumber > 1) {
      setAmountWon(pyramid.find(m => m.id === currentQuestionNumber - 1).amount)
    }
  }, [currentQuestionNumber, pyramid])

  // useEffect(() => {
  //   letsPlay();
  // }, [letsPlay])
  return (

    <div className="app">
      {!submitUser ? <Name userName={userName} setUserName={setUserName} setSubmitUser={setSubmitUser} /> : (
        <>
          <Main data={data} stop={stop} setStop={setStop} currentQuestionNumber={currentQuestionNumber} setCurrentQuestionNumber={setCurrentQuestionNumber} amountWon={amountWon} setAmountWon={setAmountWon} />
          <Pyramid stop={stop} setStop={setStop} pyramid={pyramid} currentQuestionNumber={currentQuestionNumber} />
        </>
      )
      }
    </div>

  );
}

export default App;
