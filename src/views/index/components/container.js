import React from 'react';
import { Switch} from 'react-router-dom'
import UserList from '../../users/userList'
import UserAdd from '../../users/userAdd'
import PrivateRouter from '../../../router/privateRouter'

function Container() {
    return (
        <Switch>
            <PrivateRouter exact path="/index/user/list" component={UserList} />
            <PrivateRouter exact path="/index/user/add" component={UserAdd} />
        </Switch>
    )
}
export default Container