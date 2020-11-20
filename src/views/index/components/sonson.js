import React from 'react';
import {Consumer} from '../index'

class Son extends React.Component {

    render() {
        return (
            <Consumer>
                {({title, des}) => <span style={{color: '#fff', float: 'right'}}>{title}-{des}</span>}
            </Consumer>
        )
    }
}
export default Son