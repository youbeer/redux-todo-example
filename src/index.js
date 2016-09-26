import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import createLogger from 'redux-logger'
import todo from './reducers'
import App from './components/App'

import {addTodo, toggleTodo, setVisibilityFilter} from './actions'

const logger = createLogger()
const store = createStore(
  todo,
  applyMiddleware(logger)
)

// const store = createStore(todo)

// console.log(store.getState())
// store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
// console.log(store.getState())

store.dispatch(addTodo('Hello React!'))
// store.dispatch(toggleTodo(0))
store.dispatch(addTodo('Hello Redux!'))

// store.dispatch(setVisibilityFilter('SHOW_ALL'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
