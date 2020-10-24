import React from 'react'
import { PersonalPageTemplate } from '../../templates/personal'
import { getIntro } from '../utils'

const PersonalPreview = ({ entry, getAsset }) => {
  const title = entry.getIn(['data', 'title'])
  const header = getIntro(entry, getAsset)

  const entryPersonal = entry.getIn(['data', 'lista-de-personal']) || false
  const personal = entryPersonal ? entryPersonal.toJS() : []

  if (entryPersonal) {
    entryPersonal.forEach((person, i) => {
      personal[i].foto = getAsset(person.get('foto')).url
    })
  }

  return (
    <PersonalPageTemplate
      title={title}
      header={header}
      personal={personal}
    />
  )
}

export default PersonalPreview