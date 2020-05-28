import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Detail() {
	let history = useHistory();
	let [count, setCount] = useState(0);
	let [name, setName] = useState('张三');
	let [title, setTitle] = useState('');
	let [author, setAuthor] = useState('');
	let [newsContent, setNewsContent] = useState('');
	let [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiY3JlYXRlVGltZSI6MTU5MDY0ODA4MjQxMywiaWF0IjoxNTkwNjQ4MDgyfQ.FxCDL7shqbCpHUAywOzkKfRLgY4m7eWOIzD7rbld4lE');
	
	useEffect(() => {
		setName('李四')
	}, [])
	
  return (
    <div className="App">
		<span>标题:</span><input placeholder="请输入标题" onChange={(e) => {setTitle(e.target.value)}} /><br/>
		<span>作者:</span><input placeholder="请输入作者" onChange={(e) => {setAuthor(e.target.value)}} /><br/>
		<span>内容:</span><input placeholder="请输入内容" onChange={(e) => {setNewsContent(e.target.value)}} /><br/>
		<button onClick={() => {
			addNews(title, author, newsContent, token)
			.then((res) => {
				if (res.data.code === 200) {
					history.push('/')
				}
			})
			}}>添加</button>
      <h4>详情页</h4>
	  <h4>{name}当前计数:{count}</h4>
	  <button onClick={() => {setCount(count + 1)}}>加1</button>
	  <button onClick={() => {setCount(count - 1)}}>减1</button>
	  <button onClick={() => {history.push('/')}}>登录页面</button>
    </div>
  );
}

function addNews(title, author, newsContent, token) {
	return axios.post('http://127.0.0.1:3001/news/addNews', {token, title, author, newsContent})
}

export default Detail;