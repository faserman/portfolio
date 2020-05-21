import React from 'react';
import { observer } from 'mobx-react';
import './index.css';
import { appStore } from '../../store/app';

import { WorksList } from './WorksList';
import { WorkDrawer } from './WorkDrawer';

export const Body =observer((props: any) => {
  
  const { workDrawerIsOpen } = appStore;
  
  return(
    <div className="body">
      <WorksList />
      { workDrawerIsOpen ? <WorkDrawer /> : null }
    </div>
  )
})