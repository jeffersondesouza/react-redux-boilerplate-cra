import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

export default class HomePage extends Component {

  render() {
    return (
      <div className="home">
        <header className="home__header">
          <h1>Welcome!</h1>
          <h2>This is a React Redux boilerplate create from Create React App lib</h2>
        </header>
        <nav className="home__nav">
          <Link to="/page-1">Go to Page 1</Link>
        </nav>

      </div>
    );
  }
}

