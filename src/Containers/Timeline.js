import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import Header from '../Containers/Header';
import Foto from '../components/Foto/Foto';
import TimelineMiddleware from '../store/timeline/middleware';

class Timeline extends Component {

  componentDidMount() {
    this.props.carregarFotos('vitor')
  }

  render() {

    return (
      <div>
        <Header />
        <div className="fotos container">
          {this.props.fotos.map(foto => <li key={foto.id}><Foto foto={foto} /></li>)}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  fotos: state.timeline.fotos
});

const mapDispatchToProps = (dispatch) => ({
  carregarFotos: (login) => dispatch(TimelineMiddleware.carregarFotos(login))
});


const TimelineContainer = connect(mapStateToProps, mapDispatchToProps)(Timeline);

Timeline.prototypes = {
  fotos: PropTypes.object,
  carregarFotos: PropTypes.func
}

export default TimelineContainer;