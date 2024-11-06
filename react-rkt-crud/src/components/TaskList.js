import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export const TaskList = () => {
    const tasksState = useSelector((state) => state.tasks);
  return (
    <Box>
        {tasksState.length > 0 &&
            <>
                <Divider sx={{ marginY: 4 }}>List tasks</Divider>
                {tasksState.map((task) => (
                    <Card 
                        variant="outlined" 
                        sx={{ marginBottom: 2, padding: 2, backgroundColor: '#FFFFFF', borderColor: '#B8C1EC', borderRadius: 1 }} 
                        key={task.id}
                    >
                        <Typography variant="h6" sx={{ color: '#2D3142' }}>{task.title}</Typography>
                        <Typography variant="body2" sx={{ color: '#555B6E' }}>{task.description}</Typography>
                    </Card>
                ))}
            </>
        }
        
    </Box>
  )
}
