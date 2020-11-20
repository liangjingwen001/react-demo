import React from 'react';
import {connect} from 'react-redux'
import {addTodo} from '../../store/action/todoAction'
import Store from '../../store/index';

class Users extends React.Component {
	componentDidMount() {
		// this.props.edit()
	}

	count = 1
	addhandle1 = () => {
		
		// Store.dispatch(addTodo('Learn about actions'))
		this.props.addTest('我是测试数据1，lesson redux')
		console.log(Store.getState())
	}
	addhandle2 = () => {
		
		// Store.dispatch(addTodo('Learn about actions'))
		this.props.addTest('我是测试数据2，lesson redux')
		console.log(Store.getState())
	}

	render() {
		return (
		<div>
			<div onClick={this.addhandle1}>用户管理{this.props.config.aa}-{this.props.config.test}</div>
		<div onClick={this.addhandle2}>用户{this.props.todoState}</div>
		</div>
		)
	}
}

 const mapStateToProps = (state) => ({
	config: state.dep,
	todoState: state.job
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