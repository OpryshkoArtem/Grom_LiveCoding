import React from 'react';

// input:
// func

// output:
// JSX

const Login = props => {
  return <button className="btn login" onClick={props.onLogin}> Login</button>;
};

export default Login;
