import React from 'react';
import { observer } from 'mobx-react';
import './index.css';

import { appStore } from '../../../store/app';
import { utils } from '../../../utils';

import { WorkItem } from '../WorkItem/index';

export const WorksList = observer((props: any) => {

  const { works, scroll, workDrawerIsOpen } = appStore;
  const { miniStyles } = utils;

  const workItems = works.map(work => <WorkItem key={work.id} work={work} />);

  return(
    <div className={`works-list${ miniStyles(scroll, workDrawerIsOpen) }`}>
      <div className={`works-list-items${ miniStyles(scroll, workDrawerIsOpen) }`}>
        { workItems }
      </div>
    </div>
  );
})