import React from 'react';
import {HashRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from '../views/login/index.js'
import Index from '../views/index/index.js'
// import Detail from '../views/detail/detail.js'
import PrivateRouter from './privateRouter'

export default function IRouter() {
	return (<Router>
		<HashRouter>
			<Switch>   {/* Switch映射第一个, exact精准查找*/}
				<Route exact path="/" render = {() => <Login />}></Route>
				<PrivateRouter path="/index" component={Index} />
				{/* <Route path="/detail" component={Detail}></Route> */}
				<Route path="*" component={Login}></Route>
			</Switch>
		</HashRouter>
	</Router>)
}