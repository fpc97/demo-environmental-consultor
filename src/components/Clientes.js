import React from 'react'
import { objectDeepSearch } from '../utils'

import PreviewCompatibleImage from './PreviewCompatibleImage'

import { Generic1 as Background } from './svgr/backgrounds'

const Clientes = ({ lista }) => {
  return (
    <article className="clientes" id="clientes">
      <Background className="generic-background generic-background--rotate generic-background--invert objetivos__background"/>
      <div className="container clientes__container">
        <h3 className="clientes__h3">Our clients</h3>
        <ul className="clientes__ul">
          {lista.map((c, i) => (
            console.log(c),
          <li key={i} className="clientes__li">
            <PreviewCompatibleImage
              imageInfo={{
                childImageSharp: objectDeepSearch(c, ['logo', 'childImageSharp']),
                alt: `Logo for ${c.nombre}`
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