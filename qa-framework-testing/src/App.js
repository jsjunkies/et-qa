import React, { Component } from 'react';
import './App.scss';

import Routes from './components/Routes/Routes';
import Header from './components/Header/Header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
