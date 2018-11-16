import { List } from 'immutable';
import {
  FETCH_BEERS_REQUEST,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE
} from './constants';

const initialState = {
  beers: new List(),
  beersNames: new List(),
  firstBeer: null,
  isLoadingBeers: false,
}

export default function exempleReducer(state = initialState, action) {
  console.log(action);

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
        beers: new List(action.payload.beers)
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



const mapFotosPosLike = (lista, fotoId, liker) => {
  return trocaFoto(lista, fotoId, (estadoAntigoFotoLikeada) => {
    return {
      ...estadoAntigoFotoLikeada,
      likers: setLikers(estadoAntigoFotoLikeada.likeada, estadoAntigoFotoLikeada.likers, liker),
      likeada: !estadoAntigoFotoLikeada.likeada
    }
  });
}


const setLikers = (jaLikeadaPeloUsuario, likers, liker) => {
  return (jaLikeadaPeloUsuario)
    ? rermoverLikerDaLista(likers, liker)
    : addLikerNaLista(likers, liker);
}

const rermoverLikerDaLista = (likers, liker) => likers.filter(lk => lk.login !== liker.login);

const addLikerNaLista = (likers, liker) => [...likers, liker];

/*  */

const concatNovoComentario = (comentario) => {
  return (fotoEstadoAntigo) => ({
    ...fotoEstadoAntigo,
    comentarios: [...fotoEstadoAntigo.comentarios, comentario]
  });
}

const mapFotosPosComentario = (lista, fotoId, comentario) => {
  return trocaFoto(lista, fotoId, concatNovoComentario(comentario));
}

const trocaFoto = (lista, fotoId, callbackNovasPropriedades) => {

  const fotoEstadoAntigo = lista.find(foto => foto.id === fotoId);
  const index = lista.findIndex(foto => foto.id === fotoId);

  const fotoEstadoNovo = {
    ...fotoEstadoAntigo,
    ...callbackNovasPropriedades(fotoEstadoAntigo)
  }

  return lista.set(index, fotoEstadoNovo)
}
