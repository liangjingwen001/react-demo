import React from 'react';
import { withRouter} from 'react-router-dom'

function Head(props) {

    const exit = () => {
        sessionStorage.removeItem('adminToken');
        props.history.push('/login')
    }

    return (
        <span onClick={exit} style={{color: '#fff', float: 'right'}}>退出</span>
    )
}
export default withRouter(Head)