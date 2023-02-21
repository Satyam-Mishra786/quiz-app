import React from 'react'

function Pyramid({ currentQuestionNumber, pyramid }) {


    return (
        <div className="pyramid">
            {pyramid.map((item, index) => (
                <div key={index} className={currentQuestionNumber === item.id ? "pyramidItem active" : 'pyramidItem'}>
                    <div className="index">{item.id}</div>
                    <div className="money"> &#8377;{item.amount}</div>
                </div>
            ))}
        </div>
    )
}

export default Pyramid