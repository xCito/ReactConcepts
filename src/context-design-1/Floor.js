import React from 'react';

export default function Floor(props) {

    console.log('Floor'+ props.floorNumber);

    return (
        <div className="floor">
                    Floor {props.floorNumber}
                    <button className="elevator-btn" onClick={() => props.changeFloor(props.floorNumber)}>Call Elevator</button>
                </div>
    );
}