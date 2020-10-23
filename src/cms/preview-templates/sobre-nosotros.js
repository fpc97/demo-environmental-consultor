import React from 'react'
import { SobreNosotrosPageTemplate } from '../../templates/sobre-nosotros'
import { getIntro } from '../utils'

const SobreNosotrosPreview = ({ entry, getAsset }) => {
  const header = getIntro(entry, getAsset)

  const objetivos = {
    lead: entry.getIn(['data', 'objetivos', 'lead']),
    principal: entry.getIn(['data', 'objetivos', 'principal']),
    items: entry.getIn(['data', 'objetivos', 'items'])
  }

  const elegirnos = {
    lead: entry.getIn(['data', 'elegirnos', 'lead']),
    principal: entry.getIn(['data', 'elegirnos', 'principal']),
    items: entry.getIn(['data', 'elegirnos', 'items'])
  }

  const clientesList = entry.getIn(['data', 'clientes'])

  objetivos.items = objetivos.items ? objetivos.items.toJS() : []
  elegirnos.items = elegirnos.items ? elegirnos.items.toJS() : []
  const clientes = clientesList ? clientesList.toJS() : []

  header.background = header.background

  return (
    <SobreNosotrosPageTemplate
      header={header}
      objetivos={objetivos}
      elegirnos={elegirnos}
      clientes={clientes}
    />
  )
}

export default SobreNosotrosPreview