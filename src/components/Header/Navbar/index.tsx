import React from 'react';
import './index.css';
import { NavButtonsList } from './NavButtonsList/index';

export const Navbar = () => {
  return(
    <div className="navbar">
      <div className="logo">
        <p className="logo-text">SN</p>
      </div>
      <NavButtonsList />
    </div>
  )
};