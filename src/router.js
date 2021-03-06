import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/login/login.js'
import Index from './pages/index/index.js'
import Detail from './pages/detail/detail.js'
import Regist from './pages/regist/regist.js'

export default function IRouter() {
	return (<Router>
		<Switch>   // 映射第一个, exact精准查找
			<Route exact path="/" component={Login}></Route>
			<Route path="/index" component={Index}></Route>
			<Route path="/detail" component={Detail}></Route>
			<Route path="/regist/:id" component={Regist}></Route>  // 动态路由
			<Route path="*" component={Login}></Route>
		</Switch>
	</Router>)
}