import React, { Component } from 'react';
import Foto from './Foto/Foto';

class Timeline extends Component {

  render() {
    return (
      <div className="fotos container">
        <Foto />
      </div>
    );
  }
}

export default Timeline;