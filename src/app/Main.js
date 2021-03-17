import React from 'react'
import { Route, Switch } from 'react-router-dom'

export default function Main(props) {

    return (
        <div className="main overflow-auto">
            <Switch>
                <Route path="/home">Home</Route>
                {props.routes.map( (route, idx) => 
                    <Route key={'route'+idx} path={route.path} children={route.component}/>
                )}
            </Switch>
        </div>
    )
}
