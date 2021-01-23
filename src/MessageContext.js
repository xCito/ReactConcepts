import React from 'react'
import DataFeed from './DataFeed';
                     
export const MessageContext = React.createContext();

export default function MessageProvider(props) {
    const [messages, setMessages] = React.useState([]);
    const addMessages = (m) => setMessages([...messages, m]);

    return (
        <MessageContext.Provider value={{messages, addMessages}}>
            <DataFeed />
            {props.children}
        </MessageContext.Provider>
    )
}
