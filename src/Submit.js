import React from 'react';

const Submit = (props) => {
    return (
        // <button className='button' onClick={props.checkSubmit} disabled={props.name < 5 || props.address < 5 || props.phone < 8 || props.phone > 12}>Submit</button>
        <button className='button' onClick={props.checkSubmit} disabled={props.disabled}>Submit</button>
    )
}

export default Submit;