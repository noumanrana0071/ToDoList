import { TodoItem } from 'types/toDoItem';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from 'store/todosActions';

interface TodosState {
  todos: TodoItem[];
}

interface Action {
  type: string;
  payload: TodoItem | number;
}

const initialState: TodosState = {
  todos: [],
};

export const todosReducer = (state = initialState, action: Action): TodosState => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload as TodoItem] };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === (action.payload as TodoItem).id ? (action.payload as TodoItem) : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, deleted: true } : todo
        ),
      };
    default:
      return state;
  }
};
