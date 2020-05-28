import React from 'react';
import './index.css';
import { observer } from 'mobx-react';

import { NavButtonsList } from './NavButtonsList/index';

export const Navbar = observer(() => {
  
  return(
    <div className="navbar">
      <div className="logo">
        <p className="logo-text">SN</p>
      </div>
      <NavButtonsList />
    </div>
  )
});