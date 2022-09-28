import React from 'react'

export const PrimerComponente = () => {

    let nombre = "Israel";
    let web    = "Alterlapsus.es"

  return (
    <div>
        <h1>Mi primer componente</h1>
        <p>Esto es un texto en mi componente</p>

        <p>Mi nombre es: {nombre}</p>
        <p>mi web es: {web}</p>
    </div>
  )
}
