import { BeersAction } from "./actions";
import { fetchBeers } from "./serveAPI";

export default class BeersMiddleware {

  static fetchBeers() {
    return dispatch => {
      fetchBeers()
        .then(beers => {
          dispatch(BeersAction.featchBeersSucces(beers));
        })
        .catch(error => BeersAction.featchBeersFailure('error'));
    }
  }

}