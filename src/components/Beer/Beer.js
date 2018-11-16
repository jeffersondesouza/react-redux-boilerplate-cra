import React, { Component } from 'react';

export default class Beer extends Component {

  render() {
    const { beer } = this.props;
    return (
      <div> {beer.name} </div>
    );
  }
}

