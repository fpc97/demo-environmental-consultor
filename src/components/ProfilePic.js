import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import PreviewCompatibleImage from './PreviewCompatibleImage'
import { objectDeepSearch } from '../utils'

const ProfilePic = ({ className, pic, nombre }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "default-avatar.jpg"}) {
        childImageSharp{
          gatsbyImageData(layout: FULL_WIDTH, height: 160, width: 160, quality: 45)
        }
      }
    }
  `)

  const image = objectDeepSearch(pic, ['childImageSharp', 'gatsbyImageData'])
    || objectDeepSearch(data, ['file', 'childImageSharp', 'gatsbyImageData'])

  return (
    <PreviewCompatibleImage
      imageInfo={{
        image,
        alt: `Foto de ${nombre}`
      }}
      className={className}
    />
  )
}

export default ProfilePic