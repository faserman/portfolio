import React from 'react';
import { observer } from 'mobx-react';
import './index.css';
import { appStore } from '../../store/app';

import { About } from './About/index';
import { WorksList } from './WorksList';
import { WorkDrawer } from './WorkDrawer';

export const Body =observer((props: any) => {
  
  const { workDrawerOpen } = appStore;
  
  return(
    <div className="body">
      <About />
      <WorksList />
      { workDrawerOpen ? <WorkDrawer /> : null }
    </div>
  )
})