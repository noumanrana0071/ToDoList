import { connect } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from 'store/todosActions';
import { TodoItem } from 'types/toDoItem';
import ToDo from '../components/ToDo';

interface TodosState {
  todos: TodoItem[];
}

interface DispatchProps {
  addTodo: typeof addTodo;
  updateTodo:typeof  updateTodo;
  deleteTodo: typeof  deleteTodo;
}

interface StateProps {
  todos: TodoItem[];
}

const mapStateToProps = (state: TodosState): StateProps => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps: DispatchProps = {
  addTodo,
  updateTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
