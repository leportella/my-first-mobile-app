const BASE_URL = 'https://anapioficeandfire.com/api';


function mountUrl(type, number) {
  return `${BASE_URL}/${type}/${number}`;
}

function fetchWesteros(type, number) {
  url = mountUrl(type, number);
  return fetch(url)
    .then(response => response.json())
    .then(responseJSON => {
      return {
        name: responseJSON.name,
      };
    })
    .catch(error => {
      console.log(error)
    });
}

export default { fetchWesteros: fetchWesteros };
