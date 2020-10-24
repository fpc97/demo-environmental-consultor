import React from 'react'
import { ServicioIndividualPageTemplate } from '../../templates/servicio-individual'
import marked from 'marked'

const ServiciosPreview = ({ entry }) => {
  const title = entry.getIn(['data', 'title'])
  const markdown = entry.getIn(['data', 'body'])
  const html = markdown ? marked(markdown) : ''

  return (
    <ServicioIndividualPageTemplate
      title={title}
      html={html}
    />
  )
}

export default ServiciosPreview