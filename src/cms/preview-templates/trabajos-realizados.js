import React from 'react'
import { TrabajosRealizadosPageTemplate } from '../../templates/trabajos-realizados'
import { getIntro } from '../utils'
import marked from 'marked'

const TrabajosRealizadosPreview = ({ entry, getAsset, widgetsFor }) => {
  const header = getIntro(entry, getAsset)

  const title = entry.getIn(['data', 'title'])

  const entryTrabajos = entry.getIn(['data', 'lista-de-trabajos'])
  const trabajos = entryTrabajos ? entryTrabajos.toJS() : []

  widgetsFor('lista-de-trabajos').forEach((p, i) => {
    trabajos[i].contenido = marked(p.getIn(['data', 'contenido']))
  })

  return (
    <TrabajosRealizadosPageTemplate
      title={title}
      header={header}
      lista_de_trabajos={trabajos}
    />
  )
}

export default TrabajosRealizadosPreview