import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoPage = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    // Додаємо нове завдання
    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    // Видаляємо завдання за індексом
    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <Container>
            <h2>TODO List</h2>
            <TextField
                label="New task"
                variant="outlined"
                fullWidth
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <Button onClick={addTask} variant="contained" color="primary" sx={{ mt: 2 }}>
                Add
            </Button>
            <List>
                {tasks.map((t, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={t} />
                        <IconButton onClick={() => removeTask(index)} color="error">
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default TodoPage;