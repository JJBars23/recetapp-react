import './App.css'
import { recetas } from './data/recetas'
import ListaRecetas from './components/ListaRecetas'

function App() {
  console.log('recetas desde App.jsx', recetas)

  return (
    <div className="App">
      <h1>Recetas</h1>
      <ListaRecetas recetas={recetas} />
    </div>
  )
}

export default App
