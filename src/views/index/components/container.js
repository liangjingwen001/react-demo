import React from 'react';
import { Switch} from 'react-router-dom'
import UserList from '../../users/userList'
import UserAdd from '../../users/userAdd'
import PrivateRouter from '../../../router/privateRouter'

class Container extends React.Component {
	render() {
        return (
            <Switch>
                <PrivateRouter exact path="/index/user/list" component={UserList} />
                <PrivateRouter exact path="/index/user/add" component={UserAdd} />
            </Switch>
        )
    }
}
export default Container