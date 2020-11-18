import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Detail(props) {
	let history = useHistory();
	let [count, setCount] = useState(0);
	let [name, setName] = useState('张三');
	let [title, setTitle] = useState('');
	let [author, setAuthor] = useState('');
	let [newsContent, setNewsContent] = useState('');
	let [token, setToken] = useState(sessionStorage.getItem("token"));
	let [newsId, setNewsId] = useState(props.location.state ? props.location.state.id : '')
	
	useEffect(() => {
		if (newsId) { init() }
	}, [])
	
  return (
    <div className="App">
		<span>标题:</span><input placeholder="请输入标题" value={title} onChange={(e) => {setTitle(e.target.value)}} /><br/>
		<span>作者:</span><input placeholder="请输入作者" value={author} onChange={(e) => {setAuthor(e.target.value)}} /><br/>
		<span>内容:</span><input placeholder="请输入内容" value={newsContent} onChange={(e) => {setNewsContent(e.target.value)}} /><br/>
		<button onClick={() => {addNews()}}>添加</button>
      <h4>详情页</h4>
	  <h4>{name}当前计数:{count}</h4>
	  <button onClick={() => {setCount(count + 1)}}>加1</button>
	  <button onClick={() => {setCount(count - 1)}}>减1</button>
	  <button onClick={() => {history.push('/')}}>登录页面</button>
    </div>
  );
  
  function init() {
	  axios.post('http://127.0.0.1:3001/news/newsDetail', {_id: newsId, token})
	  .then((res) => {
	  	if (res.data.code === 200) {
	  		setTitle(res.data.data[0].title);
	  		setAuthor(res.data.data[0].author);
	  		setNewsContent(res.data.data[0].newsContent);
	  	}
	  })
  }
  
  function addNews() {
  	axios.post('http://127.0.0.1:3001/news/addNews', {token, title, author, newsContent})
	.then((res) => {
		if (res.data.code === 200) {
			history.push('/index')
		}
	})
  }
}	

export default Detail;