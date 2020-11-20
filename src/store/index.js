import {createStore, combineReducers} from 'redux'

import depReducer from './reducer/dep'
import jobReducer from './reducer/job'
import configReducer from './reducer/config'
 
// 创建reducer对象
const allReducer = {
    dep: depReducer,
    job: jobReducer,
    config: configReducer
}

// 多个reducer(一个reducer可以直接createStore)
const rootReducer = combineReducers(allReducer)

// 创建store
const store = createStore(rootReducer)

export default store