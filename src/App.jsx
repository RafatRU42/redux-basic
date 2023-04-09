import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import ShowTodos from './FetchComponents/ShowTodos'
import ShowToolkint from './ReduxToolkit/ShowToolkint'
import ShowExtra from './Components/ExtraReducer/ShowExtra'

function App() {

  return (
    <div className="App">
      
      <ShowToolkint></ShowToolkint>
      <ShowExtra></ShowExtra>
    </div>
  )
}

export default App
