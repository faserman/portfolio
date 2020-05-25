import React from 'react';
import './index.css';
import { appStore } from '../../../store/app';
import { observer } from 'mobx-react';

import { NavMenuBtn } from './NavMenuBtn';
import { NavButtonsList } from './NavButtonsList/index';

export const Navbar = observer(() => {

  const { screenWidth } = appStore;
  let toggle: boolean = false;
  if (screenWidth < 880) {
    toggle = true
  } else {
    toggle = false
    console.log(toggle);
  };
  
  return(
    <div className="navbar">
      <div className="logo">
        <p className="logo-text">SN</p>
      </div>
      { toggle ? 
        <NavMenuBtn /> : <NavButtonsList />
      }
    </div>
  )
});