import React from 'react'
import { SobreNosotrosPageTemplate } from '../../templates/sobre-nosotros'

const SobreNosotrosPreview = ({ entry, getAsset }) => {
    const intro = {
        title: entry.getIn(['data', 'title']),
        lead: entry.getIn(['data', 'intro', 'lead']),
        firstParagraph: entry.getIn(['data', 'intro', 'principal']),
        secondParagraph: entry.getIn(['data', 'intro', 'secundario']),
        background: getAsset(entry.getIn(['data', 'intro', 'background']))
    }

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

    intro.background = <img className="intro__background" src={intro.background}></img>

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