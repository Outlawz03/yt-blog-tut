import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <div className="nav-bumper">
      </div>
      <nav>
        <div className="nav-wrapper">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/about">Add post</NavLink></li>
            <li><NavLink to="/about">Sign in</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
};