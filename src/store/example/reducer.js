import { List } from 'immutable';
import { selectFirstBeer } from './selectors';

import {
  FETCH_BEERS_REQUEST,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE
} from './constants';

import initialState from './initialState';

export default function exempleReducer(state = initialState, action) {

  console.log(action.type);
  switch (action.type) {

    
    case FETCH_BEERS_REQUEST:
      return {
        ...state,
        isLoadingBeers: true
      };

    case FETCH_BEERS_SUCCESS:
      return {
        ...state,
        isLoadingBeers: false,
        beers: new List(action.payload.beers),
        firstBeer: selectFirstBeer(action.payload.beers)
      };


    case FETCH_BEERS_FAILURE:
      return {
        ...state,
        isLoadingBeers: false,
        error: action.payload.error
      };


    default:
      return state;
  }
}
