import RecetasCard from './RecetasCard'

function ListaRecetas({ recetas }) {
  return (
    <div style={{ display: 'grid', gap: '20px', padding: '20px' }}>
      {recetas.map(receta => (
        <RecetasCard key={receta.id} receta={receta} />
      ))}
    </div>
  )
}

export default ListaRecetas
