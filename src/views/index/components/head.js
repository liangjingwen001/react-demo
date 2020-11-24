import React from 'react';
import { withRouter} from 'react-router-dom'
import Son from './sonson'
import {Provider} from '../index'

class Head extends React.Component {

    exit = () => {
        sessionStorage.removeItem('adminToken');
        this.props.history.push('/login')
    }

    data = {
		title: '黑铁教育',
		des: '学习资料123'
	}

    render() {
        return (
            // 需要修改的组件也用Provider包裹
            <Provider value={this.data}>
                <span onClick={this.exit} style={{color: '#fff', float: 'right'}}>退出<Son /></span>
            </Provider>
        )
    }
}
export default withRouter(Head)