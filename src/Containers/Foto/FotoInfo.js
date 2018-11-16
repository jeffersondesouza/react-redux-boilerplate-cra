import React, { Component } from 'react';
import FotoLikes from './FotoLikes';
import FotoComentarios from './FotoComentarios';

export default class FotoInfo extends Component {
  render() {
    return (
      <div className="foto-info">
        <FotoLikes />
        <p className="foto-info-legenda">
          <a className="foto-info-autor">autor </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
        </p>
        <FotoComentarios />
      </div>
    );
  }
}
