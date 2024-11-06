import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';

export const TasksForm = () => {
    const [task, setTask] = useState(
        { 
            taskId: Date.now(), 
            title: '', 
            description: '' 
        }
    );
    const dispath = useDispatch();
    const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

    const handleAddTask = (e) => {
        e.preventDefault();
        console.log("Adding Task:", task.title, task.description);

        cleanFields();
    };
    
    const handleDeleteTask = (e) => {
        e.preventDefault();
        console.log("Delete task with ID:", task.taskId);
        cleanFields();
    };

    const handleEditTask = (e) => {
        e.preventDefault();
        console.log("Update task with ID:", task.taskId);
        cleanFields();
    };

    const cleanFields = () => setTask({ title: '', description: '' });
    
  return (
    <Grid container spacing={4}>
    {/* Add Task */}
        <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#2D3142' }}>Add a New Task</Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleAddTask}>
                <TextField 
                    label="Title" 
                    name='title'
                    variant="outlined" 
                    fullWidth 
                    value={task.title}
                    onChange={handleChange}
                    sx={{ backgroundColor: '#FFFFFF' }} 
                />
                <TextField 
                    label="Description" 
                    name='description'
                    variant="outlined" 
                    value={task.description}
                    onChange={handleChange}
                    fullWidth 
                    sx={{ backgroundColor: '#FFFFFF' }} 
                />
                <Button variant="contained" sx={{ backgroundColor: '#EF8354', color: '#FFFFFF', '&:hover': { backgroundColor: '#E5734D' } }} type="submit">
                    Add Task
                </Button>
            </Box>
        </Grid>

        {/* Delete Task */}
        <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#2D3142' }}>Delete a Task</Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleDeleteTask}>
                <TextField 
                    label="Task ID" 
                    variant="outlined" 
                    fullWidth 
                    value={task.taskId}
                    onChange={handleChange}
                    sx={{ backgroundColor: '#FFFFFF' }} 
                    />
                <Button variant="contained" sx={{ backgroundColor: '#4F5D75', color: '#FFFFFF', '&:hover': { backgroundColor: '#404A5E' } }} type="submit">
                    Delete Task
                </Button>
            </Box>
        </Grid>

        {/* Edit Task */}
        <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#2D3142' }}>Edit a Task</Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleEditTask}>
                <TextField 
                    label="Task ID" 
                    variant="outlined" 
                    fullWidth 
                    value={task.taskId}
                    onChange={handleChange}
                    sx={{ backgroundColor: '#FFFFFF' }} />
                <Button variant="contained" sx={{ backgroundColor: '#EF8354', color: '#FFFFFF', '&:hover': { backgroundColor: '#E5734D' } }} type="submit">
                    Edit Task
                </Button>
            </Box>
        </Grid>
    </Grid>
  )
}
