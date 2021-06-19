import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home/Home';

export default function Main(props) {

    return (
        <div className="main overflow-auto">
            <Switch>
                <Route exact path="/" children={<Home />} />
                {props.routes.map( (route, idx) => 
                    <Route key={'route'+idx} path={route.path} children={route.component}/>
                )}
            </Switch>
        </div>
    )
}
