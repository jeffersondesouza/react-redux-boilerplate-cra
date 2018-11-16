import { List } from 'immutable';
import {
  LISTAGEM_REQUEST,
  LISTAGEM_SUCCESS,
  LISTAGEM_FAILURE,
  LIKE_REQUEST,
  LIKE_SUCCESS,
  LIKE_FAILURE,
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAILURE,
} from './constants';

const initialState = {
  fotos: new List(),
  fotoLike: null,
  fotoComment: null,
}

export default function timeline(state = initialState, action) {
  console.log(action);
  
  if (action.type === LISTAGEM_REQUEST) {
    return {
      ...state,
      fotos: new List(action.payload.fotos)
    };
  }

  if (action.type === 'LIKE') {

    return {
      ...state,
      fotos: mapFotosPosLike(state.fotos, action.payload.foto.id, action.payload.liker)
    };
  }


  if (action.type === 'COMMENT') {

    return {
      ...state,
      fotos: mapFotosPosComentario(state.fotos, action.payload.foto.id, action.payload.comment),
    };
  }

  return state;
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
