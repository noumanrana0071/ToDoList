import { createStore } from 'redux';
import { todosReducer } from '../reducer/todosReducer';

export const store = createStore(todosReducer);

export const getState = store.getState;
export const dispatch = store.dispatch;
