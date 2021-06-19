import React from 'react';

export default function Elevator(props) {

    console.log('Elevator');

    return (
        <div className="elevator-shaft">
            <div className={"elevator elevator-f" + props.floor}></div>
        </div>
    );
}