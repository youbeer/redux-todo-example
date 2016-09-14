import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todo from './reducers'
import App from './components/App'

import {addTodo} from './actions'

let store = createStore(todo)
// store.dispatch(addTodo('Hello World'))
// console.log(store.getState())
// store.dispatch(addTodo('React js'))
// console.log(store.getState())

store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('Hello Redux!'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
