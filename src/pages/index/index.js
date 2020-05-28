import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Index(props) {
	let history = useHistory();
	
	let [dataList, setDataList] = useState([1,2,3]);
	let [token, setToken] = useState(props.location.query.token);
	
	useEffect(() => {
		axios.post('http://127.0.0.1:3001/news/selectNews', {token: token})
		.then((res) => {
			setDataList(res.data.data)
		})
	}, [])
	
	let list = [];
	dataList.forEach((item, index) => {
		list.push(<li key={index}>{item.title}--{item.newsContent}<button onClick={() => {
			delNews(item._id, token)
			.then((res) => {
				axios.post('http://127.0.0.1:3001/news/selectNews', {token: token})
				.then((res) => {
					setDataList(res.data.data)
				})
			})
		}}>删除</button>
		<button>详情</button>
		</li>)
	})
	
	return (
		<div className="App">
		  <h4>这是首页</h4>
		  <ul>{list}</ul>
		  <button onClick={() => {history.push('/detail')}}>新增</button>
		</div>
	)
}

function delNews(id, token) {
	console.log(1111)
	return axios.post('http://127.0.0.1:3001/news/delNews', {token: token, _id: id})
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