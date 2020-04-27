import React from 'react';
import { observer } from 'mobx-react'
import './App.css';
import { Header } from './components/Header/index';
import { Body } from './components/Body';
import { appStore } from './store/app';

@observer
class App extends React.Component {
  render() {

    appStore.gettingWorks();

    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
