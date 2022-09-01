import React from 'react'

function Name({ userName, setUserName, setSubmitUser }) {

    const handleClick = () => {
        if (userName.length) {
            setSubmitUser(true);
        }
        else {
            alert(`Enter valid username`)
        }
    }
    return (
        <div className='username'>
            <input className='inputUser' type='text' placeholder='Enter Your Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <button className='submitBtn' onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Name