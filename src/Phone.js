import React from 'react';

const Input = (props) => {
    return (
        <label>
            Phone: <input type="text" placeholder='Enter your phone number' value={props.phone} onChange={props.changePhone} />
        </label>
    )
}

export default Input;