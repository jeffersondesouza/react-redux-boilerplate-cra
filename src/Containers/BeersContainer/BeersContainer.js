import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BeersMiddleware from '../../store/example/middleware';

class Beers extends Component {

  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    const { beers, firstBeer } = this.props;
    return (
      <div>
        <div>First Beer: {firstBeer? firstBeer.name : 'none'}</div>
        <ul>
          {
            beers.map(beer => <li key={beer.id}>{beer.name}</li>)
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