import React from 'react';

function Counter(props) {
    return (
        <div className="counter">
            <h2>{props.title}</h2>
            { props.days ? <p>{props.days} days</p> : "" }
            { props.hours ? <p>{props.hours} hours</p> : "" }
            { props.minutes ? <p>{props.minutes} minutes</p> : "" }
        </div>
    )
}

export default Counter;
