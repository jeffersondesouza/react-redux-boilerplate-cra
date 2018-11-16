const initialState = {
  msg: '',
}

export default function notificacoes(state = initialState, action) {
  if (action.type === 'NOTIFICA') {
    return {
      ...state,
      msg: action.payload.msg
    }
  }

  return state;
}