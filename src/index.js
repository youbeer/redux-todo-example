import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import createLogger from 'redux-logger'
import todo from './reducers'
import App from './components/App'

import {addTodo, toggleTodo} from './actions'

const logger = createLogger()
const store = createStore(
  todo,
  applyMiddleware(logger)
)


store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('Hello Redux!'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
