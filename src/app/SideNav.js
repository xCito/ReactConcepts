import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function SideNav(props) {
    return (
        <div className="side">
            <h3>
                <NavLink to="/home" activeClassName="no-pointer-events">
                    <FontAwesomeIcon icon={faHome} className="me-2"/>
                </NavLink>
                React Concepts
            </h3>
            <ul>
                {props.routes.map( (route, idx) => 
                <li key={'navLnk'+idx}>
                    <NavLink to={route.path} activeClassName="no-pointer-events">{route.title}</NavLink>
                </li>)}
            </ul>
        </div>
    )
}

export default SideNav;