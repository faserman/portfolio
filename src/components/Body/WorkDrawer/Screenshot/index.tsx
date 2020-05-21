import React from 'react';
import './index.css';

export const Screenshot = (props: any) => {

  return(
    <img 
      className="screenshot"
      src={ props.screenSrc }
    />
  )
}
