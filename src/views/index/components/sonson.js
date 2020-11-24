import React, {useContext} from 'react';
import {testContext} from '../index'

const Son = () => {
    const test = useContext(testContext);
    console.log(test)
    return (
        // 获取数据的组件用Consumer包裹
        // <Consumer>
        //     {({title, des}) => <span style={{color: '#fff', float: 'right'}}>{title}-{des}</span>}
        // </Consumer>

        // 或者使用useContext
        <div style={{color: '#fff', float: 'right'}}>{test.title}-{test.des}</div>
    )
}
export default Son