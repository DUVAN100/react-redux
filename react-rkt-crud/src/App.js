import './App.css';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function App() {
  const tasksState = useSelector(state => state.tasks);
  console.log("tasksState", tasksState)
  return (
    <Paper  elevation={3} className="App">
      <Typography variant="h1">Tasks</Typography>
      {tasksState.map(task => (
        <Card variant="outlined" key={task.id}>
          <Typography variant='h3'>{task.title}</Typography>
          <Typography variant='p'>{task.description}</Typography>
        </Card>
      ))}
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <button type="submit">Add Task</button>
      </form>
      <h2>Delete a task</h2>
      <form>
        <input type="text" placeholder="Task ID" />
        <button type="submit">Delete Task</button>
      </form>
      <h2>Edit a task</h2>
      <form>
        <input type="text" placeholder="Task ID" />
      </form>
    </Paper>
  );
}

export default App;
