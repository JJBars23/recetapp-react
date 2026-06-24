import { useState } from 'react'
import './App.css'
import { recetas } from './data/recetas'

function App() {
  console.log('recetas desde App.jsx', recetas)

  return (
    <div className="App">
      <h1>Recetas</h1>
      <pre>{JSON.stringify(recetas, null, 2)}</pre>
    </div>
  )
}

export default App
