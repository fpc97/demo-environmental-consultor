import React from 'react'
import { PersonalPageTemplate } from '../../templates/personal'
import { getIntro } from '../utils'

const PersonalPreview = ({ entry, getAsset }) => {
  const intro = getIntro(entry, getAsset)

  const entryPersonal = entry.getIn(['data', 'lista-de-personal']) || false
  const personal = entryPersonal ? entryPersonal.toJS() : []

  if (entryPersonal) {
    entryPersonal.forEach((coco, i) => {
      personal[i].foto = getAsset(coco.get('foto')).url
    })
  }

  return (
    <PersonalPageTemplate
      intro={intro}
      personal={personal}
    />
  )
}

export default PersonalPreview