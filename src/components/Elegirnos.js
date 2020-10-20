import React from 'react'

import Icon from './Icon'
import { Elegirnos as Background } from './svgr/backgrounds'

const PorQueElegirnos = ({
  lead,
  principal,
  items
}) => {
  return (
    <article className="elegirnos white" id="elegirnos">
      <Background className="elegirnos__background" />
      <div className="container elegirnos__container">
        <h3 className="elegirnos__h3">¿Por qué elegirnos?</h3>

        {(lead || principal) && (
        <section className="elegirnos__intro">
          {lead && <p className="elegirnos__lead lead">{lead}</p>}
          {principal && <p className="elegirnos__parrafo">{principal}</p>}
        </section>
        )}

        {items && (
        <section className="elegirnos__items">
          <ul className="elegirnos__lista">
            {items.map((a, i) => (
            <li key={i} className="elec-item">
              <Icon name={a.icono} size="6x" style={{color: 'white', stroke: '1px'}} className={'elec-item__svg'}/>
              <h4 className="elec-item__titulo">{a.titulo}</h4>
              <p className="elec-item__descripcion">{a.descripcion}</p>
            </li>
            ))}
          </ul>
        </section>
        )}
      </div>
    </article>
  )
}

export default PorQueElegirnos