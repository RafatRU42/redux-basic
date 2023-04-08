import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import ShowTodos from './FetchComponents/ShowTodos'

function App() {

  return (
    <div className="App">
      
      <ShowTodos/>
    </div>
  )
}

export default App
