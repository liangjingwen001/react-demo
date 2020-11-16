import React from 'react';
import {HashRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from '../pages/login/index.js'
import Index from '../pages/index/index.js'
import Detail from '../pages/detail/detail.js'
import Regist from '../pages/regist/regist.js'

export default function IRouter() {
	return (<Router>
		<HashRouter>
			<Switch>   // Switch映射第一个, exact精准查找
				<Route exact path="/" component={Login}></Route>
				<Route path="/index" component={Index}></Route>
				<Route path="/detail" component={Detail}></Route>
				<Route path="/regist/:id" component={Regist}></Route>  // 动态路由
				<Route path="*" component={Login}></Route>
			</Switch>
		</HashRouter>
	</Router>)
}