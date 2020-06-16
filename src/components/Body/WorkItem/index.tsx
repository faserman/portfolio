import React from 'react';
import { observer } from 'mobx-react';
import './index.css';

import { utils } from '../../../utils/index'
import { appStore } from '../../../store/app';

export const WorkItem = observer((props: any) => {

  const { toggleWorkDrawer, scroll, workDrawerIsOpen } = appStore;
  const { miniStyles } = utils;

  const { 
    id,
    name,
    srcIcon,
   } = props.work;

  const onEditDrawer = () => {
    toggleWorkDrawer(id);
  };


  return(
    <div 
      className={`work-item${miniStyles(scroll, workDrawerIsOpen)}`}
      onClick={ onEditDrawer }
    >
      <img className={`img-work-item${miniStyles(scroll, workDrawerIsOpen)}`} src={ srcIcon } />
      <p className={`name-work${miniStyles(scroll, workDrawerIsOpen)}`}>{ name }</p>
    </div>
  )
})