import React from 'react'

import Icon from './icon'

import { Generic1 as Background } from './svgr/backgrounds'

const NuestrosObjetivos = ({
  lead,
  principal,
  items
}) => {
  return (
    <article className="objetivos">
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
                <svg className="objetivo__circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 171"><path d="M165.9 83.7c0 43.6-35.2 79-78.7 79.4h-.8c-31 0-57.9-17.7-71-43.6l-.5-1.1a79.5 79.5 0 11151-34.7z" fill="#084e8a"/><linearGradient id="lng" gradientUnits="userSpaceOnUse" x1="27.2" y1="157.6" x2="166.2" y2="86.6"><stop offset="0" stopColor="#096e96"/><stop offset="1" stopColor="#084e8a"/></linearGradient><path d="M165.9 83.7c0 43.6-35.2 79-78.7 79.4h-.8c-31 0-57.9-17.7-71-43.6l-.5-1.1 49.8-22 52.6-23 43-18.9a78.7 78.7 0 015.6 29.2z" fill="url(#lng)"/></svg>
                <Icon name={'Termometro vacio'} className={'objetivo__svg'} style={{color: 'white'}} size="4x"/>
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