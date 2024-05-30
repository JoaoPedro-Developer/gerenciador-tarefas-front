import Tasks from './components/tasks'
import SideBar from './components/sideBar'

import './App.scss'
const App = () => {
  return <div className='app-container'>
    <SideBar/>
    <Tasks/>
  </div>
}

export default App;
