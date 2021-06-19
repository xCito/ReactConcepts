import React from 'react';
import Building from './Building';
import FloorQueue from './FloorQueue';
import {ElevatorProvider} from './ElevatorContext';
import '../styles/context-design-1.css';

export default function ContextDesign() {
    return <ElevatorProvider>
        <FloorQueue /> 
        <Building />
    </ElevatorProvider>;
}