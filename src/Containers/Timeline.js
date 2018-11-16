import React, { Component } from 'react';

import Header from '../Containers/Header';

import Foto from '../components/Foto/Foto';

class Timeline extends Component {

  componentDidMount(){
    console.log(this.props);
    
  }

  render() {
    return (
      <div>
        <Header />
        <div className="fotos container">
          <Foto />
          <Foto />
        </div>
      </div>
    );
  }
}

export default Timeline;