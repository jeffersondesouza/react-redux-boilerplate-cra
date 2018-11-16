import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/Home/HomePage';
import TimelineContainer from './Containers/Timeline';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch >
          <Route path="/" exact="true" component={HomePage} />
          <Route path="/page-1" component={TimelineContainer} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
