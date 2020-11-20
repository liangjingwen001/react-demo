// Reducer
const jobReducer = function(state = [], action) {
    switch(action.type) {
        case 'TODO_STATE':
            return action.text
        default:
            return state
    }
}

export default jobReducer