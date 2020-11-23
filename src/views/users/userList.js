import React from 'react';
import {connect} from 'react-redux'
import {addTodo} from '../../store/action/todoAction'
import Store from '../../store/index';

class Users extends React.Component {
	componentDidMount() {
		// this.props.edit()
	}

	addhandle1 = () => {
		// Store.dispatch({type: 'ADD_TODO', text: {title: '待办事项1', approval: 'zhangsan'}})
		Store.dispatch(addTodo({title: '待办事项1', approval: 'zhangsan'}))
		// Store.dispatch({type: 'TODO_COUNT', text: 123})
		// this.props.addTest('我是测试数据1，lesson redux')
		// console.log(Store.getState())
	}
	addhandle2 = () => {
		// redux调用diapatch
		Store.dispatch(addTodo('Learn about actions'))
		// react-redux调用diapatch
		this.props.addTest('我是测试数据2，lesson redux')
		// redux获取store数据
		console.log(Store.getState())
		// react-redux获取store数据
		console.log(this.props.todoState)
	}

	render() {
		const list = this.props.todoList.length ? (this.props.todoList.map((number) =>
		<li key={number.toString()}>
		  {number.title}
		</li>
	  )) : <div>暂无数据</div>

		return (
		<div>
			<div onClick={this.addhandle1}>用户管理{this.props.config.aa}-{this.props.config.test}</div>
			<div onClick={this.addhandle2}>用户{this.props.todoState}</div>
			{/* <p>1{Store.getState().todoReducer}</p> */}
			{/* <p>2{this.props.testData}</p> */}
			{list}
		</div>
		)
	}
}

 const mapStateToProps = (state) => ({
	config: state.dep,
	todoState: state.job,
	todoList: state.todoReducer
 })

 const mapDispatchToProps = (dispatch) => {
	 return {
		 edit: () => {
			dispatch({
				type: 'test',
				pyalod: '1234567'
			})
		 },
		 add: (text) => {
			 dispatch({
				type: 'ADD_TODO',
				text: text
			})
		 },
		 addTest: (text) => {
			 dispatch({
				type: 'TODO_STATE',
				text: text
			 })
		 }
	}
 }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users);
