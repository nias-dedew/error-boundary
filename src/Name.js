import React from 'react';

const Input = (props) => {
    return (
        <label>
            Name: <input type="text" placeholder='Enter your name' value={props.name} onChange={props.changeName} />
        </label>
    )
}

export default Input;