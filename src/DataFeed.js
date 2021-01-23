
import React from 'react'
import { MessageContext } from './MessageContext';

export default function DataFeed() {
    const { addMessages } = React.useContext(MessageContext);
    const [ receiving, setReceiving ] = React.useState(false);
    const counter = React.useRef(0);    // Value that persist across re-renders
    
    const toggle = () => {
        setReceiving(!receiving);
    }

    // Run only once
    React.useEffect(() => {
        console.debug('Data Feed useEffect[addMessages]');
        // Subscribe: to received data.
        let interval
        if (receiving) {
            interval = setInterval(() => addMessages(`message ${counter.current++}`), 500);
        }
        // Unsubscribe: stop receiving data.
        return () => clearInterval(interval);
    }, [addMessages, receiving]); 

    return (
        <>
            Toggle Data Feed
            <button onClick={toggle}>{receiving ? 'Stop' : 'Go'}</button>
        </>
    );
}
