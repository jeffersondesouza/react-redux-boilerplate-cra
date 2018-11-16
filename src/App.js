import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Timeline from './Containers/Timeline';
import Login from './Containers/Login';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch >
          <Route path="/" exact={true} component={Login} />
          <Route path="/page-1" component={Timeline} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
