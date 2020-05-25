import React from 'react';
import { observer } from 'mobx-react';
import './index.css';

export const Footer = observer((props: any) => {

  return(
    <div className="footer">
      <div className="copyright">
      <span className="copyright-logo">SN</span>
      <span className="copyright-span">2020 Sorokin Nikolay</span>
      </div>
    </div>
  )
})