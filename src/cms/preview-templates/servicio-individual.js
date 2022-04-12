import React from 'react'
import { ServicioIndividualPageTemplate } from '../../templates/servicio-individual'
import marked from 'marked'

const ServiciosPreview = ({ entry }) => {
  const title = entry.getIn(['data', 'title'])
  const header = entry.getIn(['data', 'header'])
  const markdown = entry.getIn(['data', 'body'])
  const html = markdown ? marked(markdown) : ''

  return (
    <ServicioIndividualPageTemplate
      title={title}
      header={header}
      html={html}
    />
  )
}

export default ServiciosPreview