import TaskItem from './components/taskItem'
import { useState } from 'react'


const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', description: 'Estudar', isCompleted: false },
    { id: '2', description: 'Ler', isCompleted: true }
  ])
  return <>
    {tasks.map(task => <TaskItem key={task.id} task={task}/>)}
  </>
}

export default App;
