export const fetchBeers = () => {
  const urlApi = 'https://api.punkapi.com/v2/beers';

  return fetch(urlApi)
    .then(res => res.json());
}
