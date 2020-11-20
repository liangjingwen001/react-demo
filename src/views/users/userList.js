import React from 'react';
import {connect} from 'react-redux'

class Users extends React.Component {
	componentDidMount() {
		this.props.edit()
	}
	render() {
		return (
		<div>用户管理{this.props.config.aa}-{this.props.config.test}</div>
		)
	}
}

 const mapStateToProps = (state) => ({
	config: state.dep
 })

 const mapDispatchToProps = (dispatch) => {
	 return {
		 edit: () => {
			dispatch({
				type: 'test',
				pyalod: '1234567'
			})
		 }
	}
 }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users);