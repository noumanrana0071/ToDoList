import { createStore } from 'redux';
import { todosReducer } from './todosReducer';
export const store = createStore(todosReducer);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
