import React from "react";
import TaskItem from './components/taskItem'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.state = {
      tasks: [ 
      { id: '1', description: 'Estudar', isCompleted: false },
      { id: '2', description: 'Ler', isCompleted: true }
    ]
    }
  }

  componentDidMount() {
    console.log('component was mounted!')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
    console.log('component was updated!')
  }

  componentWillUnmount() {
    console.log('i will unmount!')
  }

  handleStateChange () {
    this.setState({
      tasks: []
    })
  }

  render() {
      return <>
    {this.state.tasks.map(task => <TaskItem key={task.id} task={task}/>)}
    <button onClick={this.handleStateChange}>Limpar Tarefas</button>
  </>
  }
}

// import TaskItem from './components/taskItem'
// import { useState } from 'react'


// const App = () => {
//   const [tasks, setTasks] = useState([
//     { id: '1', description: 'Estudar', isCompleted: false },
//     { id: '2', description: 'Ler', isCompleted: true }
//   ])
//   return <>
//     {tasks.map(task => <TaskItem key={task.id} task={task}/>)}
//   </>
// }

export default App;
