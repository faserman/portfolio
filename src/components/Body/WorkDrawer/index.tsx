import React from 'react';
import { observer } from 'mobx-react';
import './index.css';
import { appStore } from '../../../store/app';

import { Screenshot } from './Screenshot';
import { Tool } from './Tool';

export const WorkDrawer = observer((props: any) => {
  
  const { works, idWork, closeWorkDrawer } = appStore;
  const work = works.find(work => work.id === idWork);
  const screenItems = work?.screenshots.map(screenSrc => <Screenshot key={ screenSrc } screenSrc = { screenSrc } />);
  const toolsItems = work?.tools.map(toolSrc => <Tool key={ toolSrc } toolSrc = { toolSrc } />);

  return(
    <div className="work-drawer">
      <div className="screenshots">
        { screenItems }
      </div>
      <div className="full-description">
        <div className="title-and-close-btn">
          <p className="title">{ work?.name }</p>
          <div 
            className="close-btn"
            onClick={ closeWorkDrawer }
          ></div>
        </div>
        <p className="description">{ work?.description }</p>
        <p className="tools-title">Использованые технологии</p>
        <div className="tools-items">
          { toolsItems }
        </div>
      </div>
    </div>
  )
})
