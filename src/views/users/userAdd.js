import React, {Fragment, useState, useEffect  } from 'react';
import Store from '../../store/index';

 const Users = () => {
	const [count, setcount] = useState(0)
	const [title] = useState('学习react')

	const add = (val) => {
		setcount(count+val)
	}

	useEffect(() => {
		console.log('钩子函数')

		return () => {
			console.log('组件卸载的时候执行')
		  };
	}, [title, count])
	// 只有数组里面的变量发生变化才走useEffect

	return (
		<Fragment>
			<div>{title}{Store.getState().job}</div>
	        <p>你有{count}条待办</p>
			<p onClick={() => {add(1)}}>加待办</p>
			<p onClick={() => {add(-1)}}>减待办</p>
		</Fragment>
	)
}

export default Users;