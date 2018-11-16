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

export class TimelineAction {

  static listarFotos(fotos) {
    return {
      type: LISTAGEM_REQUEST,
      payload: { fotos: [...fotos] }
    }
  }
  
  static like(foto, liker) {
    return {
      type: 'LIKE',
      payload: { foto, liker }
    }
  }

  static comentar(foto, comment) {
    return {
      type: 'COMMENT',
      payload: { foto, comment }
    }
  }
}