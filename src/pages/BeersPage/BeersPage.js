import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './beers-page.css';

class BeersPage extends Component {

  render() {
    return (
      <div className="home">
        <header className="home__header">
          <h2>This is a pge with a list of beers!</h2>
          <p>List populated from the Store</p>
        </header>

        <ul>
          <li>List</li>
        </ul>

      </div>
    );
  }
}


export default BeersPage;