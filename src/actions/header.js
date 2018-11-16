export class HeaderAction {

  static notifica(msg) {
    
    return {
      type: 'NOTIFICA',
      payload: { msg }
    }
  }

}