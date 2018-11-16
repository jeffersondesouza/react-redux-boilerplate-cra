import { TimelineAction } from "../actions/timeline";
import { HeaderAction } from "../actions/header";

export default class TimelineApi {

  static carregarFotos(login) {
    const urlPerfil = (login === undefined)
      ? `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`
      : `http://localhost:8080/api/public/fotos/${login}`;

    return dispatch => {
      fetch(urlPerfil)
        .then(res => res.json())
        .then(fotos => {
          dispatch(TimelineAction.listarFotos(fotos));
        });
    }
  }

  static pesquisaFotosUser(login) {
    const urlPerfil = `http://localhost:8080/api/public/fotos/${login}`;
    return dispatch => {
      fetch(urlPerfil)
        .then(res => res.json())
        .then(fotos => {
          if (fotos.length === 0) {
            dispatch(HeaderAction.notifica('Usuário não encontrado'));
          } else {
            dispatch(HeaderAction.notifica(''));

          }
          dispatch(TimelineAction.listarFotos(fotos));
        });
    }
  }

  static comment(foto, texto) {
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({
        texto
      }),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    }
    return dispatch => {

      fetch(`http://localhost:8080/api/fotos/${foto.id}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, requestInfo)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("não foi possível realizar o like da foto");
          }
        })
        .then(commentRes => {
          dispatch(TimelineAction.comentar(foto, commentRes));
        });
    }

  }

  static like(foto) {
    const requestInfo = {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      })
    };

    return dispatch => {
      fetch(`http://localhost:8080/api/fotos/${foto.id}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, requestInfo)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("não foi possível realizar o like da foto");
          }
        })
        .then(liker => {
          dispatch(TimelineAction.like(foto, liker));

        });
    }
  }

}