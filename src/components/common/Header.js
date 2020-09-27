import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import { Nav, NavBumper, NavCover } from '../style/Nav';

import { Brand } from '../common/Brand';
import { Button } from '../common/Button';
import {MenuBars} from '../common/icons/MenuBars';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const hideMenu = () => {
    setShowMenu(false);
  }
  return (
    <>
      <NavBumper />
      {showMenu && <NavCover onClick={ hideMenu }/>}
      <Nav>
        <div className="nav-wrapper">
          <NavLink className="nav-brand" onClick={hideMenu} to="/"><Brand primary={'#FFFFFF'} secondary={'#FB6961'} /></NavLink>
          <div className="nav-container">
            <div className="nav-links">
              <ul className={showMenu ? "show" : "" }>
                <li><NavLink to="/about" onClick={hideMenu}>About</NavLink></li>
                <li><NavLink to="/about" onClick={hideMenu}>Add post</NavLink></li>
              </ul>          
            </div>
            <div className="nav-right">
              <NavLink to="/about"><Button btnTheme={'outline'} message={'Sign in'} /></NavLink>     
              <div className="nav-menu-button" onClick={toggleMenu}><MenuBars /></div>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};