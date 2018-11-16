import React, { Component } from 'react';
import Header from './Containers/Header';
import Timeline from './Containers/Timeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timeline />
      </div>
    );
  }
}

export default App;
