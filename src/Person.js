import React from 'react';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} & I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    );
}

export default person;