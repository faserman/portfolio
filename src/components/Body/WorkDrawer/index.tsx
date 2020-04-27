import React from 'react';
import { observer } from 'mobx-react';
import './index.css';
import { appStore } from '../../../store/app';

import { Screenshot } from './Screenshot';

export const WorkDrawer = observer((props: any) => {
  
  const { works, idWork } = appStore;
  const work = works.find(work => work.id === idWork);
  const screenItems = work?.screenshots.map(screenSrc => <Screenshot key={ screenSrc } screenSrc = { screenSrc } />);

  return(
    <div className="work-drawer">
      <div className="screenshots">
        { screenItems }
      </div>
      <div className="full-description">
        <p className="title">{ work?.name }</p>
        <p className="description">{ work?.description }</p>
        <p className="tools">{ work?.tools }</p>
      </div>
    </div>
  )
})