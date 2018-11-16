import React, { Component } from 'react';
import FotoComentario from './FotoComentario';

export default class FotoComentarios extends Component {

  render() {
    return (
      <ul className="foto-info-comentarios">
        <FotoComentario />
        <FotoComentario />
      </ul>
    );
  }
}
