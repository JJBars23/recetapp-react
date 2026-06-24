function FiltroCategoria({ categorias, categoriaSeleccionada, onCategoriaChange }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
      <button
        type="button"
        onClick={() => onCategoriaChange('Todas')}
        style={{
          padding: '10px 16px',
          borderRadius: '999px',
          border: categoriaSeleccionada === 'Todas' ? '2px solid #2563eb' : '1px solid #94a3b8',
          backgroundColor: categoriaSeleccionada === 'Todas' ? '#bfdbfe' : '#f8fafc',
          cursor: 'pointer'
        }}
      >
        Todas
      </button>
      {categorias.map(categoria => (
        <button
          key={categoria}
          type="button"
          onClick={() => onCategoriaChange(categoria)}
          style={{
            padding: '10px 16px',
            borderRadius: '999px',
            border: categoriaSeleccionada === categoria ? '2px solid #2563eb' : '1px solid #94a3b8',
            backgroundColor: categoriaSeleccionada === categoria ? '#bfdbfe' : '#f8fafc',
            cursor: 'pointer'
          }}
        >
          {categoria}
        </button>
      ))}
    </div>
  )
}

export default FiltroCategoria
