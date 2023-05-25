import * as React from 'react';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Typography,
    TextField,
    Divider,
    Button,
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction
} from '@mui/material';

interface TodoItem {
    id: number;
    text: string;
}



const ToDo = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [editTodoId, setEditTodoId] = useState<number | null>(null);

    const handleAddTodo = () => {
        if (inputText) {
            if (editTodoId !== null) {
                const updatedTodos = todos.map(todo => {
                    if (todo.id === editTodoId) {
                        return { ...todo, text: inputText };
                    }
                    return todo;
                });
                setTodos(updatedTodos);
                setEditTodoId(null);
            } else {
                const newTodo: TodoItem =
                {
                    id: Date.now(),
                    text: inputText,
                };
                setTodos([...todos, newTodo]);
            }
            setInputText('');
        }
    };

    const handleEditTodo = (id: number) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        if (todoToEdit) {
            setInputText(todoToEdit.text);
            setEditTodoId(id);
        }
    };

    const handleDeleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <Box bgcolor='#fb6a6a' sx={{ p: 5, maxWidth: 400, margin: 'auto',mt:3}}>
            <Box sx={{mt: 2}} >
                <Typography variant="h3" sx={{ marginBottom: '10px',color: '#FFFFFF'}}>Todo List</Typography>
                <Typography variant="h6" sx={{ marginTop: '-3px' ,color: '#FFFFFF'}}>A Simple React ToDo App</Typography>
                <Divider sx={{ marginRight: '5%',margin:1,color: '#FFFFFF'}} />
            </Box>
            <Box>
            <List>
                {todos.map(todo => (
                    <ListItem key={todo.id} sx={{ bgcolor: '#ff7776' ,mt:1}} >
                        <ListItemText primary={todo.text} sx={{color: '#FFFFFF'}}/>
                        <ListItemSecondaryAction>
                            {editTodoId !== todo.id ? (
                                <Button onClick={() => handleEditTodo(todo.id)} color="primary">
                                    <EditIcon />
                                </Button>
                            ) : null}
                            <Button onClick={() => handleDeleteTodo(todo.id)} color="secondary">
                                <DeleteIcon />
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            </Box>
            <Typography variant="h6" sx={{mt:2,color: '#FFFFFF'}}>New ToDo</Typography>
            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' ,mt:0}}>
                <TextField
                    label={editTodoId !== null ? 'Edit Todo' : 'Add Todo'}
                    variant="outlined"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    sx={{ width: '100%', bgcolor: '#FFFFFF', borderRadius: '4px' }}
                    InputProps={{
                        sx: {
                            '& fieldset': {
                                borderRadius: '4px',
                            }
                        }
                    }}
                />
                <Button
                    onClick={handleAddTodo}
                    variant="contained"
                    fullWidth
                    sx={{ width: '28%', background: ' #fb6a6a !important', height: '200%' }}
                >
                    {editTodoId !== null ? 'Save' : 'Add'}
                </Button>
            </Box>

        </Box>
    );
};
export default ToDo;
