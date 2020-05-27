import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Detail() {
	let history = useHistory();
	let [count, setCount] = useState(0);
	let [name, setName] = useState('张三');
	
	// 类似钩子函数,加上[]只执行一次
	useEffect(() => {
		setName('李四')
	}, [])
	
  return (
    <div className="App">
      <h4>详情页</h4>
	  <h4>{name}当前计数:{count}</h4>
	  <button onClick={() => {setCount(count + 1)}}>加1</button>
	  <button onClick={() => {setCount(count - 1)}}>减1</button>
	  <button onClick={() => {history.push('/')}}>登录页面</button>
    </div>
  );
}

export default Detail;