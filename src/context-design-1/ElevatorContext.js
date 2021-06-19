import React from 'react';

export const ElevatorContext = React.createContext();
export function ElevatorProvider(props) {
    const [floor, setFloor] = React.useState(1);

    return <ElevatorContext.Provider value={{floor, setFloor}}>
        {props.children}
    </ElevatorContext.Provider>
}