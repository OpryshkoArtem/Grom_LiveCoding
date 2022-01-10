// input: obj
// out: undef
const saveUser = userData => {
  console.log(JSON.stringify(userData));
  // input: string, obj
  // output: promise

  const httpPromise = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

  // input: callback
  // --input: promise result
  // --output: RANDOM
  // output: promise
  httpPromise
    .then(response => {
      return response.json();
    })
    .then(res => {
      console.log(res);
    });
};

// test data
const user = {
  emal: 'test@mail.com',
  userName: 'Bob',
  password: 'sass',
};

saveUser(user);
