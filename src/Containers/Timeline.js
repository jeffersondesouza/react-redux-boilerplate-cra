import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Header from '../Containers/Header';
import Foto from '../components/Foto/Foto';
import TimelineApi from '../logicas/TimelineApi';

class Timeline extends Component {

  componentDidMount() {
    console.log(this.props);

    this.props.carregarFotos('vitor')

  }

  render() {
    console.log(this.props.fotos);

    return (
      <div>
        <Header />
        <div className="fotos container">
          {this.props.fotos.map(foto => <li key={foto.id}><Foto foto={foto}/></li>)}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  fotos: state.timeline.fotos
});

const mapDispatchToProps = (dispatch) => ({
  carregarFotos: (login) => dispatch(TimelineApi.carregarFotos(login))
});


const TimelineContainer = connect(mapStateToProps, mapDispatchToProps)(Timeline);

Timeline.prototypes = {
  fotos: PropTypes.object,
  carregarFotos: PropTypes.func
}

export default TimelineContainer;