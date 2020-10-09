import React from 'react'
import { PersonalPageTemplate } from '../../templates/personal'
import { getIntro } from '../utils'

const PersonalPreview = ({ entry, getAsset }) => {
  const intro = getIntro(entry, getAsset)

  const entryPersonal = entry.getIn(['data', 'lista-de-personal'])
  const personal = entryPersonal ? entryPersonal.toJS() : []

  entryPersonal.forEach((coco, i) => {
    personal[i].foto = getAsset(coco.get('foto')).url
  })

  //intro.background = <img className="intro__background" src={intro.background}></img>

  return (
    <PersonalPageTemplate
      intro={intro}
      personal={personal}
    />
  )
}

export default PersonalPreview