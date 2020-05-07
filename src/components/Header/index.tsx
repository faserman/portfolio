import React from 'react';
import './index.css';

import { Navbar } from './Navbar/index';
import { About } from './About';

export const Header = () => {
  return(
    <div className="header">
      <Navbar />
      <About />
    </div>
  )
}