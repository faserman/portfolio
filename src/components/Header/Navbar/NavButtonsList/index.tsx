import React from 'react';
import { observer } from 'mobx-react';
import './index.css';

export const NavButtonsList = observer((props: any) => {
  return(
    <div className="nav">
      <a className="nav-text" href="">Об авторе</a>
      <a className="nav-text" href="">Работы</a>
      <a className="nav-text" href="">Контакты</a>
    </div>
  )
})