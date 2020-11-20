import React, {Fragment} from 'react';
import Store from '../../store/index';

class Users extends React.Component {

	render() {
		return (
		<Fragment>新增用户{Store.getState().todoReducer[0].text}</Fragment>
		)
	}
}

export default Users;