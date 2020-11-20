const stateData = {
    test_data: '',
    aa: 123
}

const depReducer = function(state = stateData, action) {
    switch(action.type) {
        case 'test': {
            return {
                ...state,
                test: action.pyalod
            }
        }
        case 'aa': {
            return {
                ...state,
                aa: action.pyalod
            }
        }
        case 'TODO_STATE':
            return action.text
        default:
            return state
    }
}

export default depReducer