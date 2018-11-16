import React, { Component } from 'react';
import FotoHeader from './FotoHeader';
import FotoInfo from './FotoInfo';
import FotoAtualizacoes from './FotoAtualizacoes';

export default class Foto extends Component {

  render() {
    const { foto } = this.props;

    console.log(foto);
    

    return (
      <div className="foto">
        <FotoHeader foto={foto} />
        <img alt="foto" className="foto-src" src={foto.urlFoto} />
        <FotoInfo />
        <FotoAtualizacoes />
      </div>
    );
  }
}

