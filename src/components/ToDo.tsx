

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Typography,
  TextField,
  Divider,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { addTodo, updateTodo, deleteTodo } from 'actions/todosActions';
import {TodoItem} from 'types/toDoItem'

interface TodosState {
  todos: TodoItem[];
}

const ToDo = () => {
  const [inputText, setInputText] = useState<string>('');
  const todos = useSelector((state: TodosState) => state.todos);
  const dispatch = useDispatch();
  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  const handleAddTodo = () => {
    if (inputText) {
      if (editTodoId !== null) {
        dispatch(updateTodo({ id: editTodoId, text: inputText }));
        setEditTodoId(null);
      } else {
        dispatch(addTodo(inputText));
      }
      setInputText('');
    }
  };

  const handleEditTodo = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setInputText(todoToEdit.text);
      setEditTodoId(id);
    }
  };

  const handleDeleteTodo = (id: number) => {
    const todoToDelete = todos.find((todo) => todo.id === id);
    if (todoToDelete) {
      dispatch(deleteTodo(todoToDelete.id));
    }
  };

  return (
    <Box bgcolor="#fb6a6a" sx={{ p: 5, maxWidth: 400, margin: 'auto', mt: 3 }}>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h3" sx={{ color: '#FFFFFF' }}>
          Todo List
        </Typography>
        <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
          A Simple React ToDo App
        </Typography>
        <Divider sx={{ marginRight: '5%', margin: 1, color: '#FFFFFF' }} />
      </Box>
      <Box>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id} sx={{ bgcolor: '#ff7776', mt: 1 }}>
              <ListItemText
                primary={todo.text}
                sx={
                  todo.deleted
                    ? { color: '#FFFFFF', textDecoration: 'line-through' }
                    : { color: '#FFFFFF' }
                }
              />
              <ListItemSecondaryAction>
                {editTodoId !== todo.id ? (
                  <Button onClick={() => handleEditTodo(todo.id)}>
                    <EditIcon sx={{ fill: '#fff', justifyContent: 'flex-end' }} />
                  </Button>
                ) : null}
                <Button onClick={() => handleDeleteTodo(todo.id)}>
                  <DeleteIcon sx={{ fill: '#fff' }} />
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
      <Typography variant="h6" sx={{ mt: 2, color: '#FFFFFF' }}>
        Edit To Do
      </Typography>
      <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', mt: 0 }}>
        <TextField
          label={editTodoId !== null ? 'Edit Todo' : 'Add Todo'}
          variant="outlined"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          sx={{ width: '100%', bgcolor: '#FFFFFF', borderRadius: '4px' }}
          InputProps={{
            sx: {
              '& fieldset': {
                borderRadius: '4px',
              },
            },
          }}
        />
        <Button
          onClick={handleAddTodo}
          variant="contained"
          fullWidth
          sx={{
            width: '28%',
            background: '#fb6a6a !important',
            height: '200%',
            padding: '13.5px 14px',
            border: '1px solid #fff',
            borderRadius: 0,
            boxShadow: 'none',
          }}
        >
          {editTodoId !== null ? 'Save' : 'Add'}
        </Button>
      </Box>
    </Box>
  );
};

export default ToDo;
