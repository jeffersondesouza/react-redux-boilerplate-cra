export class TimelineAction {

  static listarFotos(fotos) {
    return {
      type: 'LISTAGEM',
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