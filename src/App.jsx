import { useState } from 'react'
import './App.css'
import { recetas } from './data/recetas'
import RecetasCard from './components/RecetasCard'

function App() {
  console.log('recetas desde App.jsx', recetas)

  return (
    <div className="App">
      <h1>Recetas</h1>
      <div style={{ display: 'grid', gap: '20px', padding: '20px' }}>
        {recetas.map(receta => (
          <RecetasCard key={receta.id} receta={receta} />
        ))}
      </div>
    </div>
  )
}

export default App
