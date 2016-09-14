import {connect} from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProops = (state) => {
  return {todos: state.todos}
}

const VisibleTodoList = connect(
  mapStateToProops
)(TodoList)

export default VisibleTodoList
