import React from 'react';
import { observer } from 'mobx-react'
import './App.css';
import { appStore } from './store/app';

import { Header } from './components/Header/index';
import { Body } from './components/Body';
import { Footer } from './components/Footer';

@observer
class App extends React.Component {

  render() {

    window.addEventListener('scroll', function() {
      appStore.setScroll(window.scrollY);
      console.log(window.scrollY);
    });
    appStore.gettingWorks();
    appStore.gettingContacts();

    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
