function RecetasCard({ receta }) {
  const categoryStyles = {
    Fondo: { backgroundColor: '#ffe5d4', borderColor: '#f4a261', color: '#9d341d' },
    Entrada: { backgroundColor: '#e0f2fe', borderColor: '#38bdf8', color: '#0c4a6e' },
    Postre: { backgroundColor: '#fde68a', borderColor: '#f59e0b', color: '#92400e' },
    default: { backgroundColor: '#e2e8f0', borderColor: '#64748b', color: '#1e293b' }
  }

  const style = categoryStyles[receta.categoria] || categoryStyles.default

  return (
    <article style={{
      padding: '18px',
      border: `2px solid ${style.borderColor}`,
      borderRadius: '16px',
      backgroundColor: style.backgroundColor,
      color: style.color,
      marginBottom: '16px',
      boxShadow: '0 8px 20px rgba(15, 23, 42, 0.08)',
      maxWidth: '520px'
    }}>
      <header style={{ marginBottom: '12px' }}>
        <h2 style={{ margin: 0, fontSize: '1.35rem' }}>{receta.nombre}</h2>
        <span style={{
          display: 'inline-block',
          marginTop: '6px',
          padding: '4px 10px',
          borderRadius: '999px',
          fontSize: '0.85rem',
          fontWeight: 600,
          backgroundColor: 'rgba(255,255,255,0.7)',
          color: style.borderColor
        }}>{receta.categoria}</span>
      </header>

      <div style={{ display: 'grid', gap: '10px', fontSize: '0.96rem' }}>
        <p style={{ margin: 0 }}><strong>Origen:</strong> {receta.origen}</p>
        <p style={{ margin: 0 }}><strong>Porciones:</strong> {receta.porciones}</p>
        <p style={{ margin: 0 }}><strong>Descripción:</strong> {receta.descripcion}</p>
        <p style={{ margin: 0 }}><strong>Ingredientes:</strong> {receta.ingredientes.join(', ')}</p>
        <p style={{ margin: 0 }}><strong>Vegetariana:</strong> {receta.esVegetariana ? 'Sí' : 'No'}</p>
      </div>
    </article>
  )
}

export default RecetasCard
