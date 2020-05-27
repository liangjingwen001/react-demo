import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="App">
		<h4>登录页面</h4>
		<Link to="/index">登录</Link>
    </div>
  );
}

export default Login;