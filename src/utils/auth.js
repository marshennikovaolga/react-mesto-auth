const BASE_URL = 'https://auth.nomoreparties.co';

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка checkResponse: ${res.status}${res.statusText}`);
};


export function registUser(email, password) {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => checkResponse(res))
}

export function authUser(email, password) {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => checkResponse(res))
    .then((data) => {
        if (data.token) {
            const token = data.token;
            localStorage.setItem('jwt', token)
        return token;
        }
    })
  }

  export function getContent(token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      }})
      .then(res => checkResponse(res))
    }