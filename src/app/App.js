import React from 'react';
import CustomHooks from '../custom-hooks/CustomHooks';
import DumbComponents from '../dumb-components/DumbComponents';
import Main from './Main';
import SideNav from './SideNav';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import './../styles/App.css';


function App() {
    const routes = [
        {path: "/DumbComponents", title: "Dumb Components", component: <DumbComponents />},
        {path: "/CustomHooks", title: "Custom Hooks", component: <CustomHooks />},
        {path: "/1", title: "Page 1", component: null},
        {path: "/2", title: "Page 2", component: null},
        {path: "/3", title: "Page 3", component: null},
        {path: "/4", title: "Page 4", component: null},
    ];

    return (
        <div className="app">
            <SideNav routes={routes} />
            <Main routes={routes} />
        </div>
    );
}

/*
    Hooks Tips Reference

    useCallback
    - useCallback( function, dependencyArray ); 
    - Returns: a function w/ same or different reference as what was passed in.
    - If values in dependencyArray DONT change, the function originally passed in (same reference) is returned.
    - If values in dependencyArray DO change, the function passed in w/ a different reference is returned.
    - Only use this when passing down callback functions to children as props.

    - Senario:
        Child component re-renders if props change.
        When parent re-renders b/c of state or context change. A line like:
            const addTwo = (a,b) => a + b;
        is recreated, giving 'addTwo' a new reference.
        The child component gets the 'addTwo' function as a props and sees it as a different value.
        Unnecessarily causing it to re-render along with the parent.


    useEffect
    - useEffect( function, dependencyArray );
    - Returns: none;
    - If dependencyArray is excluded, code inside of 'function' is ran on mount and every update.
    - If dependencyArray is [] (empty array), code inside of 'function' is ran on mount only.
    - If dependencyArray is has values, code inside of 'function' is ran when any of the provides values change.
    - Code inside of 'function' is ran AFTER the component finishes rendering.
    - 'function' can return a 'clean-up' function which is ran when the component is going to unmount.
    - Empty dependencyArray is helpful for running things once only, like:
        - Adding event listeners.
        - Subscribing to some data source.

        
    useContext
    - useContext( Context )
    - Is a solution to the problem of passing props down many levels to a grand-child component.
*/

export default App;
