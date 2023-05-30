import {TodoItem} from 'types/toDoItem'

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
  },
});

export const updateTodo = (todo: TodoItem) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: id,
});
