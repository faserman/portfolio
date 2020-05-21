import React from 'react';
import { observer } from 'mobx-react';
import './index.css';

import { appStore } from '../../../store/app';

import { WorkItem } from './WorkItem/index';

export const WorksList = observer((props: any) => {

  const { works } = appStore;
  const workItems = works.map(work => <WorkItem key={work.id} work={work} />);

  return(
    <div className="works-list">
      <div className="works-list-title">Примеры работ</div>
      <div className="works-list-items">
      { workItems }
      </div>
    </div>
  );
})