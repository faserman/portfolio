import React from 'react';
import './index.css';
import { utils } from '../../../../utils/index';

export const Tool = (props: any) => {

  const { toolSrc } = props;
  const url = utils.getUrlTools(toolSrc)

  return (
    <div className="tool-item">
      <a className="tool-name" href={ url }>{ toolSrc }</a>
    </div>
  )
}