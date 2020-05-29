import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './login.css';
import axios from 'axios';

function Login() {
	let history = useHistory();
	let [userName, setUserName] = useState('');
	let [passWord, setPassWord] = useState('');
	let [token, setToken] = useState('');
	
  return (
    <div className="App">
		<h4>登录页面</h4>
		<div className="content">
			<span>用户名:</span><input placeholder="请输入用户名" onChange={(e) => {setUserName(e.target.value)}} /><br/>
			<span>密码:</span><input placeholder="请输入密码" type="password" maxLength={5} onChange={(e) => {setPassWord(e.target.value)}} /><br/>
			{userName}---{passWord}<br/>
			<button onClick={() => {submit(userName, passWord)}}>登录</button>
		</div>
		<Link to="/index">登录</Link>
    </div>
  );
  
  function submit(userName, passWord) {
  	axios.post('http://127.0.0.1:3001/user/login', {userName, passWord})
	.then((res) => {
		if(res.data.code === 200) {
			history.push({pathname: '/index', query: {token : res.data.token }})
			sessionStorage.setItem("token",res.data.token);
		} else {
			alert(res.data.msg)
		}
	})
  }
}
 
export default Login;