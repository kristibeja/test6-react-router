import React from 'react';
import "./SidebarNav.css";
import { Link, NavLink } from 'react-router-dom';
import {AiOutlineMail} from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

export default function SidebarNav() {
  return (
    <div className='sidebar-container'>
      {/* <nav> */}
        <ul>
          <li className='align-center'>
            <BsGrid1X2 activeClassName="active" />
            <NavLink to="/" activeClassName="active" >Dashboard</NavLink>
          </li>
          <li className='align-center'>
            <BsPerson />
            <NavLink to="/contacts" activeClassName="active" >Contacts</NavLink>
          </li>
          <li className='align-center'>
            <BsListTask />
            <NavLink to="/tasks" activeClassName="active" >Tasks</NavLink>
          </li>
          <li className='align-center'>
            <AiOutlineMail />
            <NavLink to="/email" activeClassName="active" >Email</NavLink>
          </li>
        </ul>
      {/* </nav> */}
    </div>
  )
}
