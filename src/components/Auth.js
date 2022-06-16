export const BASE_URL = 'http://localhost:5000/api';

// Authorization
/*
export const authorize = (identifier, password) => {
  return fetch(`${BASE_URL}/auth/local`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({identifier, password})
  })
  .then((response => response.json()))
  .then((data) => {
    if (data.jwt){
      localStorage.setItem('jwt', data.jwt);
      return data;
    }
  })
  .catch(err => console.log(err))
};
*/

export const authorize = (identifier, password) => {
  const jwt = 'Gtsjshhs65789hsgd889jdhhgdgdtg778ljg';
  localStorage.setItem('jwt', jwt);
};