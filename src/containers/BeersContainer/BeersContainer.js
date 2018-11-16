import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BeersMiddleware from '../../store/example/middleware';
import Beer from '../../components/Beer/Beer';

class Beers extends Component {

  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    const { beers, firstBeer, isLoadingBeers } = this.props;

    return (
      <div>
        <div>{ (isLoadingBeers ? <p>Is Loading Beers</p> : '') }</div>
        <div>First Beer: {firstBeer ? firstBeer.name : 'none'}</div>
        <ul>
          {
            beers.map(beer => <li key={beer.id}><Beer beer={beer} /></li>)
          }
        </ul>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return ({
    ...state.example
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchBeers: (login) => dispatch(BeersMiddleware.fetchBeers())
});



Beers.prototypes = {
  beers: PropTypes.object,
  fistBeer: PropTypes.object,
}

const BeersContainer = connect(mapStateToProps, mapDispatchToProps)(Beers)

export default BeersContainer;