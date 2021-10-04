import React, {useState} from 'react'
import AddTasks from './Componentes/AddTasks'
import Task from './Componentes/Task'


function App() {
  const [task, setTask] = useState([])

  function handleCallback(data) {
    setTask([...task, data])
  }

  return (
    <>
      <AddTasks handleCallback={(data) => handleCallback(data)}/>
      <Task tasks={task}/>
    </>
  )
}

export default App
