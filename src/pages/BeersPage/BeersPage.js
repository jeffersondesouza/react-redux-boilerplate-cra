import React, { Component } from 'react';

import './beers-page.css';

import BeersContainer from '../../containers/BeersContainer/BeersContainer';

export default class BeersPage extends Component {

  render() {
    return (
      <div className="home">
        <header className="home__header">
          <h2>This is a pge with a list of beers!</h2>
          <p>List populated from the Store</p>
        </header>
        <BeersContainer />
      </div>
    );
  }
}

