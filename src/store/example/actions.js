import {
  FETCH_BEERS_REQUEST,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE,
} from './constants';

export class BeersAction {

  static featchBeersRequest() {
    return { type: FETCH_BEERS_REQUEST }
  }

  static featchBeersSucces(beers) {
    return {
      type: FETCH_BEERS_SUCCESS,
      payload: { beers },
    }
  }

  static featchBeersFailure(fotos) {
    return {
      type: FETCH_BEERS_FAILURE,
      payload: { error: 'Could not fetch the beers' }
    }
  }
}