import React from 'react';
import {ElevatorContext} from './ElevatorContext';

export default function FloorQueue() { 
    const {floor} = React.useContext(ElevatorContext);
    const [message, setMessage] = React.useState('Default');

    console.log('FloorQueue');
    
    React.useEffect(() => {
        setTimeout(() => setMessage("On floor " + floor), 1000);
    }, [floor]);

    return <div className="floor-queue-container">{message}</div>
}