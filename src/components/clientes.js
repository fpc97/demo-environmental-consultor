import React from 'react'

import PreviewCompatibleImage from './preview-compatible-image'

import { Generic1 as Background } from './svgr/backgrounds'

const Clientes = ({ lista }) => {
  console.log(lista)
  return (
    <article className="clientes">
      <Background className="generic-background generic-background--rotate generic-background--invert objetivos__background"/>
      <div className="container clientes__container">
        <h3 className="clientes__h3">Nuestros clientes</h3>
        <ul className="clientes__ul">
          {lista.map((c, i) => (
          <li key={i} className="clientes__li">
            <PreviewCompatibleImage
              imageInfo={{
                image: c.logo,
                alt: `Logo de ${c.nombre}`
              }}
              className="clientes__img"
            />
          </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default Clientes