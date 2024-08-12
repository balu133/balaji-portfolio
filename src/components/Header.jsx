import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { VscAccount } from "react-icons/vsc";
import reg from './signup.png'
import login from './logout.png'
function Header() {
  const activeState=({isActive})=>{
    return isActive ? {color:'tomato'}:{};
  }
  return (
    <div className='container-fluid'>
    <div className='nav1'>
       <ul className='nav nav-underline justify-content-center'>
       
        <li className='nav-item'>
          <NavLink to="" className='nav-link' style={activeState}>
            HOME
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/about" className='nav-link' style={activeState}>
            ABOUT
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/support" className='nav-link' style={activeState}>
            SUPPORT
          </NavLink>
        </li>
        <li className='sign-up'>
        <img src={reg} />
        </li>
        <li className='log-out'>
        <img src={login} />
        </li>
       </ul>
    </div>
    </div>
  )
}

export default Header
