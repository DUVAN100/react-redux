import './App.css';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { TasksForm } from './components/TasksForm';
import { TaskList } from './components/TaskList';


function App() {
  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 800, margin: 'auto', backgroundColor: '#F4F6F8', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#2D3142' }}>Tasks</Typography>
      <Divider sx={{ marginY: 4, backgroundColor: '#B8C1EC' }} />
      <TasksForm />
      <TaskList />
    </Paper>
  );
}

export default App;
