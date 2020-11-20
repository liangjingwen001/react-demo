const stateData = {
    test_data: '',
    aa: 123
}

const depReducer = function(state = stateData, action) {
    console.log(state, action)
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
        default:
            return state
    }
}

export default depReducer