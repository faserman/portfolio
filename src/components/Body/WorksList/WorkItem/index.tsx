import React from 'react';
import { observer } from 'mobx-react';
import './index.css';
import { appStore } from '../../../../store/app';

export const WorkItem = observer((props: any) => {

  const { toggleWorkDrawer } = appStore;
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
      className="work-item"
      onClick={ onEditDrawer }
    >
      <img className="img-work-item" src={ srcIcon } />
      <p className="name-work">{ name }</p>
    </div>
  )
})