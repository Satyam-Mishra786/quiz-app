import React from 'react'

function Start({ setStart }) {

    const handleClick = () => {
        setStart(true)
    }
    return (
        <div className='username'>
            <button className='submitBtn' onClick={handleClick}>Start</button>
        </div>
    )
}

export default Start