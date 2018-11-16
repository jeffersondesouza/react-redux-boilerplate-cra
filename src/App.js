import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Timeline from './Containers/Timeline';
import Login from './Containers/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch >
          <Route path="/" exact={true} component={Login} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
