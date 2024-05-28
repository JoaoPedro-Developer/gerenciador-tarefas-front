import { useState, useEffect } from 'react'
import axios from 'axios'

import TaskItem from './components/taskItem'



const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', description: 'Estudar', isCompleted: false },
    { id: '2', description: 'Ler', isCompleted: true }
  ])

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/tasks')
      setTasks(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])


  return <>
    {tasks.map(task => <TaskItem key={task.id} task={task}/>)}
  </>
}

export default App;
