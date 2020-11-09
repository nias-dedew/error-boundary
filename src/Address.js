import React from 'react';

const Input = (props) => {
    return (
        <label>
            Address: <input type="text" placeholder='Enter your address' value={props.address} onChange={props.changeAddress} />
        </label>
    )
}

export default Input;