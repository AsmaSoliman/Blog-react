import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

const NavBar=()=>{
    return(
    
        <ul className="nav nav-pills row justify-content-center">
  <li className="nav-item col-3">
    <NavLink exact to="/users" className="nav-link" >Users</NavLink>
  </li>
  <li className="nav-item col-3">
    <NavLink exact to="/posts" className="nav-link" >Posts</NavLink>
  </li>
  </ul>
  
    );
}
export default NavBar;