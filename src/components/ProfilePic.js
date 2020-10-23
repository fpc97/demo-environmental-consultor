import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import PreviewCompatibleImage from './PreviewCompatibleImage'

const ProfilePic = ({ className, pic, nombre }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "default-avatar.jpg"}) {
        childImageSharp{
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const { file } = data

  return (
    <PreviewCompatibleImage
      imageInfo={{
        image: pic || file,
        alt: `Foto de ${nombre}`
      }}
      className={className}
      sharpType="fixed"
    />
  )
}

export default ProfilePic