import React from 'react';
import './index.css';
import { observer } from 'mobx-react';
import { appStore } from '../../store/app';

import { NavMenu } from './NavMenu';
import { Navbar } from './Navbar/index';

export const Header = observer(() => {

  const { scroll, navMenuToggle } = appStore;

  let headerStyle = "header";
  if (scroll > 0) {
    headerStyle += " header-scroll-reaction"
  };

  return(
    <div className={ headerStyle }>
      <Navbar />
      { navMenuToggle ? <NavMenu /> : null }
    </div>
  )
});