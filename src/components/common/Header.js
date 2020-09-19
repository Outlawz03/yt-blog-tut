import React from 'react';
import { NavLink } from 'react-router-dom';

import { Nav, NavBumper } from '../style/Nav';

import { Brand } from '../common/Brand';
import { Button } from '../common/Button'

export const Header = () => {
  return (
    <>
      <NavBumper />
      <Nav>
        <div className="nav-wrapper">
          <NavLink className="nav-brand" to="/"><Brand primary={'#FFFFFF'} secondary={'#FB6961'} /></NavLink>
          <div className="nav-links">
            <ul>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/about">Add post</NavLink></li>
            </ul>          
          </div>
          <NavLink to="/about"><Button btnTheme={'outline'} message={'Sign in'} /></NavLink>
        </div>
      </Nav>
    </>
  );
};