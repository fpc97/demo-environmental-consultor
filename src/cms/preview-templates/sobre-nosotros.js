import React from 'react'
import { SobreNosotrosPageTemplate } from '../../templates/sobre-nosotros'
import { getIntro } from '../utils'

const SobreNosotrosPreview = ({ entry, getAsset }) => {
  const intro = getIntro(entry, getAsset)

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

  const clientes = entry.getIn(['clientes'])

  //intro.background = <img className="intro__background" src={intro.background}></img>

  return (
    <SobreNosotrosPageTemplate
      intro={intro}
      objetivos={objetivos}
      elegirnos={elegirnos}
      clientes={clientes}
    />
  )
}

export default SobreNosotrosPreview