import React, {useState} from 'react';

export const PrimerComponente = () => {

    // let nombre = "Israel";
    let web    = "Alterlapsus.es"

    const [nombre, setNombre] = useState("Israel");

    let puestos = [
        "Bodeguero",
        "Supervisor",
        "Operador",
        "Corredor",
    ];

    const cambiarNombre = (nuevoNombre) => {
       setNombre(nuevoNombre);
    }

  return (
    <div>
        <h1>Mi primer componente</h1>
        <p>Esto es un texto en mi componente</p>

        <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>mi web es: {web}</p>

        <input type="text" onChange={ e => cambiarNombre(e.target.value)} placeholder="cambia el nombre" />

        <button onClick={ e => cambiarNombre("ISRAEL DE LEON")}>Cambiar Nombre</button>

        <button onClick={ e => {
            console.log('El valor guardado en tu estado es:', nombre);
        }}>Mostrar valor de estado</button>

        <h2>Puestos: </h2>
        <ul>
            {
                puestos.map( (puesto, indice )=> {
                    return ( <li key={indice}>
                        {puesto}
                    </li> )
                })
            }
        </ul>
    </div>
  )
}
