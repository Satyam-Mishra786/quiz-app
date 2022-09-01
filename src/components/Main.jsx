import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import useSound from 'use-sound';
import correct from '../sounds/correct.mp3'
import wrong from '../sounds/wrong.mp3'

function Main({ currentQuestionNumber, data, setCurrentQuestionNumber, amountWon, stop, setStop }) {

    const [selectedOption, setSelectedOption] = useState(null);
    const [className, setClassName] = useState("option");
    const [wrongAnswer, setWrongAnswer] = useState(true);
    const [timer, setTimer] = useState(45);

    const [playCorrect] = useSound(correct);
    const [playwrong] = useSound(wrong);

    const handleClick = (item) => {
        setSelectedOption(item);
        setClassName("option active");

        setTimeout(() => {
            if (item.correct) {
                setClassName("option correct");
                setTimer(NaN);

                setTimeout(() => {
                    playCorrect();
                    setCurrentQuestionNumber(prev => prev + 1);
                    setTimer(45);
                }, 3000)
            }
            else {
                setClassName("option wrong");
                setTimeout(() => {

                    playwrong();
                }, [3000])
                setTimeout(() => {
                    setWrongAnswer(false);
                }, 4000);
            }
        }, 1000);
    }


    const [question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(data[currentQuestionNumber - 1])
    }, [currentQuestionNumber, data]);

    return (
        <>
            <div className="main">
                {question && wrongAnswer && !stop ? (
                    <div className="quiz">
                        <Timer timer={timer} setTimer={setTimer} setStop={setStop} />
                        <div className="quizSection">
                            <div className="question">
                                {question?.question}
                            </div>
                            <div className="chooseOption">
                                {question?.options.map((item, index) => (
                                    <div key={index} className={selectedOption === item ? className : "option"} onClick={() => handleClick(item)}>
                                        {item.option}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) :
                    <div className='endTextContainer'>
                        <h1 className="endText">
                            <span>You Earned : </span>
                            <span> &#8377; {amountWon}</span>
                        </h1>
                    </div>

                }
            </div>
        </>
    )
}

export default Main