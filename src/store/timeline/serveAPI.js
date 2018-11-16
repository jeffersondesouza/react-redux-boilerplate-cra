export const carregarFotos = (login) => {
  const urlPerfil = (login === undefined)
    ? `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`
    : `http://localhost:8080/api/public/fotos/${login}`;

  return fetch(urlPerfil)
    .then(res => res.json());
}

export const pesquisaFotosUser = (login) => {
  const urlPerfil = `http://localhost:8080/api/public/fotos/${login}`;
  return fetch(urlPerfil)
    .then(res => res.json());
}

export const comment = (foto, texto) => {
  const requestInfo = {
    method: 'POST',
    body: JSON.stringify({
      texto
    }),
    headers: new Headers({
      'Content-type': 'application/json'
    })
  }
  return fetch(`http://localhost:8080/api/fotos/${foto.id}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, requestInfo)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("não foi possível realizar o like da foto");
      }
    });
}

export const like = (foto) => {
  const requestInfo = {
    method: 'POST',
    headers: new Headers({
      'Content-type': 'application/json'
    })
  };

  return fetch(`http://localhost:8080/api/fotos/${foto.id}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, requestInfo)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("não foi possível realizar o like da foto");
      }
    });
}
