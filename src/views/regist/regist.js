import React from 'react';
import {Link, useParams} from 'react-router-dom';

function Regist() {
	let params = useParams();
  return (
    <div className="App">
		<h4>注册页面:{params.id}</h4>
		<Link to="/index">登录</Link>
    </div>
  );
}

export default Regist;