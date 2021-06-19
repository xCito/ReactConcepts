import React from 'react';
import Floor from './Floor';
import Elevator from './Elevator';
import {ElevatorContext} from './ElevatorContext';

function Building(props) {
    const {floor, setFloor} = React.useContext(ElevatorContext);

    console.log('Building');
    
    const changeFloor = (floorNum) => {
        setFloor(floorNum);
    };

    return (
        <div className="building">
            <div className="building-floors">
                <Floor floorNumber={5} changeFloor={changeFloor} />
                <Floor floorNumber={4} changeFloor={changeFloor} />
                <Floor floorNumber={3} changeFloor={changeFloor} />
                <Floor floorNumber={2} changeFloor={changeFloor} />
                <Floor floorNumber={1} changeFloor={changeFloor} />
                
            </div>
            <Elevator floor={floor} />
        </div>
    );
}

export default Building;