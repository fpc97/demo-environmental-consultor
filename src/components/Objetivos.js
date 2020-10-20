import React from 'react'

import Icon from './Icon'

import { Generic1 as Background } from './svgr/backgrounds'
import { ObjCircle } from './svgr/shapes'

const NuestrosObjetivos = ({
  lead,
  principal,
  items
}) => {
  return (
    <article className="objetivos" id="objetivos">
      <Background className="generic-background objetivos__background"/>
      <Background className="generic-background generic-background--invert objetivos__background"/>
      <div className="container objetivos__container">
        <h3 className="objetivos__h3">Nuestros objetivos</h3>

        {(lead || principal) && (
        <section className="objetivos__intro">
          {lead && <p className="objetivos__lead lead">{lead}</p>}
          {principal && <p className="objetivos__parrafo">{principal}</p>}
        </section>
        )}

        {items && (
        <section className="objetivos__items">
          <ul className="objetivos__lista">
            {items.map((a, i) => (
            <li key={i} className="objetivo">
              <div className="objetivo__icono">
                <ObjCircle className="objetivo__circle"/>
                <Icon name={a.icono} className={'objetivo__svg'} style={{color: 'white'}} size="4x"/>
              </div>
              <h4 className="objetivo__titulo">{a.titulo}</h4>
              <p className="objetivo__descripcion">{a.descripcion}</p>
            </li>
            ))}
          </ul>
        </section>
        )}
      </div>
    </article>
  )
}

export default NuestrosObjetivos