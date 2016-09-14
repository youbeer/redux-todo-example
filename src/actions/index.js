let nextTodoId = 0

// actionCreater
export const addTodo = (text) => {
  // action
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
