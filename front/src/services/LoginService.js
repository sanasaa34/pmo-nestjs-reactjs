 export const loginUserService = (request) => {
    const LOGIN_API_ENDPOINT = 'http://localhost:3000/auth/signin';
  
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': ' application/json',
      
      },
      body: JSON.stringify(request.user)
    };
  
    return fetch(LOGIN_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  };