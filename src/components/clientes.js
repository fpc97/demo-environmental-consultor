import React from 'react'

const Clientes = ({ lista }) => {
  return (
    <article className="clientes">
      <div className="container">
        <h3 className="clientes__h3">Nuestros clientes</h3>
        <ul className="clientes__ul">
          {lista.map((c, i) => (
          <li key={i} className="clientes__li">
            <img src={c.logo} alt={c.nombre} className="clientes__img"></img>
          </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default Clientes