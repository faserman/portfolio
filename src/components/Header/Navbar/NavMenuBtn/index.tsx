import React from 'react';
import './index.css';
import { observer } from 'mobx-react';
import { appStore } from '../../../../store/app';

export const NavMenuBtn = observer(() => {

  const { openBtnsMenu } = appStore;

  return(
    <div className="nav-btn-menu" onClick= { openBtnsMenu } >
      <span className="lines"></span>
    </div>
  )
});