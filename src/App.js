import React from 'react'
import './App.css';
import Convo from './Convo';
import MessageProvider from './MessageContext';

function App() {
    return (
        <MessageProvider>
            <div className="App">
                <Convo />
            </div>
        </MessageProvider>
    );
}

export default App;
