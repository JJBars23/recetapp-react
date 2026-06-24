import { useMemo, useState } from 'react'
import './App.css'
import { recetas } from './data/recetas'
import FiltroCategoria from './components/FiltroCategoria'
import ListaRecetas from './components/ListaRecetas'

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')
  const [terminoBusqueda, setTerminoBusqueda] = useState('')

  const categorias = useMemo(() => {
    const categoriasUnicas = recetas
      .map(receta => receta.categoria)
      .filter((categoria, index, array) => array.indexOf(categoria) === index)
    return categoriasUnicas
  }, [])

  const recetasFiltradas = useMemo(() => {
    return recetas.filter(receta => {
      const coincideCategoria =
        categoriaSeleccionada === 'Todas' || receta.categoria === categoriaSeleccionada
      const coincideBusqueda = receta.nombre
        .toLowerCase()
        .includes(terminoBusqueda.trim().toLowerCase())

      return coincideCategoria && coincideBusqueda
    })
  }, [categoriaSeleccionada, terminoBusqueda])

  return (
    <div className="App">
      <h1>Recetas</h1>

      <FiltroCategoria
        categorias={categorias}
        categoriaSeleccionada={categoriaSeleccionada}
        onCategoriaChange={setCategoriaSeleccionada}
      />

      <div style={{ marginBottom: '20px' }}>
        <input
          type="search"
          placeholder="Buscar por nombre..."
          value={terminoBusqueda}
          onChange={event => setTerminoBusqueda(event.target.value)}
          style={{
            width: '100%',
            maxWidth: '420px',
            padding: '10px 14px',
            borderRadius: '12px',
            border: '1px solid #cbd5e1',
            fontSize: '1rem'
          }}
        />
      </div>

      {recetasFiltradas.length > 0 ? (
        <ListaRecetas recetas={recetasFiltradas} />
      ) : (
        <p style={{ color: '#475569', fontSize: '1rem' }}>
          No hay recetas que coincidan
        </p>
      )}
    </div>
  )
}

export default App
