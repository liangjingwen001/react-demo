import {SET_TOKEN} from '../action/globalAction'

const globalReducer = (state = '', action) => {
    switch(action.type) {
        case SET_TOKEN:
            return action.text
        default:
            return state
    }
}

export default globalReducer