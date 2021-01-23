import React from 'react';
import { MessageContext } from './MessageContext';

export default function Convo() {
    const { messages } = React.useContext(MessageContext);

    return (
        <div style={{overflowY: 'scroll', maxHeight: '40vh'}}>
            <h1>Conversation feed</h1>
            <ul>
                {messages.map( (m,i) => <li key={`msgFeed${i}`}>{m}</li>)}
            </ul>
                
        </div>
    );
};
