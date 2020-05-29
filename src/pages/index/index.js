import React,{useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Index(props) {
	
	let history = useHistory();
	let [dataList, setDataList] = useState([1,2,3]);
	let [flag, setFlag] = useState(0);
	let [token, setToken] = useState(sessionStorage.getItem("token"));
	// let [token, setToken] = useState(props.location.query.token);
	
	useEffect(() => {
		axios.post('http://127.0.0.1:3001/news/selectNews', {token: token})
		.then((res) => {
			setDataList(res.data.data)
		})
	}, [flag])
	
	let list = [];
	dataList.forEach((item, index) => {
		list.push(<li key={index}>{item.title}--{item.newsContent}<button onClick={() => {delNews(item._id)}}>删除</button><button onClick={() => {newsDetail(item._id)}}>详情</button></li>)
	})
	
	return (
		<div className="App">
		  <h4>这是首页</h4>
		  <ul>{list}</ul>
		  <button onClick={() => {history.push('/detail')}}>新增</button>
		</div>
	)
	
	function delNews(_id) {
		axios.post('http://127.0.0.1:3001/news/delNews', {token, _id})
		.then((res) => {
			setFlag(flag + 1)
		})
	}
	
	function newsDetail(id) {
		// history.push({pathname:"/detail?id=" + id})
		history.push({pathname: "/detail", state: {id : id}});
	}
}


/*
class Index extends React.Component{
	toDetail = () => {
		this.props.history.push('/detail')
	}
	render() {
		return (
		  <div className="App">
			<h4>这是首页</h4>
		    <button onClick={this.toDetail}>详情页跳转</button>
		  </div>
		);
	}
}*/

export default Index;