export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'

// action creater(使用可以简化dispatch操作)
export function addTodo(text) {
    return { type: ADD_TODO, text }
  }
  
export function toggleTodo(index) {
return { type: TOGGLE_TODO, index }
}