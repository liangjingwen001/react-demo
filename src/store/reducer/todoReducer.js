import {ADD_TODO, TOGGLE_TODO} from '../action/todoAction'

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.text]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
            if (index === action.index) {
                return Object.assign({}, todo, {
                completed: !todo.completed
                })
            }
            return todo
            })
        case 'TODO_COUNT': 
            return action.text
        default:
            return state
    }
}

export default todos