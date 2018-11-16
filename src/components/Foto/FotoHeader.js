import React, { Component } from 'react';

export default class FotoHeader extends Component {
  render() {
    const { foto } = this.props;

    return (
      <header className="foto-header">
        <figure className="foto-usuario">
          <img src={foto.urlPerfil} alt="foto do usuario" />
          <figcaption className="foto-usuario">
            <a href="#">{foto.loginUsuario}</a>
          </figcaption>
        </figure>
        <time className="foto-data">{foto.horario}</time>
      </header>
    );
  }
}