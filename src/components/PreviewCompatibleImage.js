import React from 'react'
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

const PreviewCompatibleImage = ({
  imageInfo,
  className,
  style = {},
  key,
  // defaultImage
  // sharpType = 'fluid'
}) => {
  const { alt = '', childImageSharp, image } = imageInfo
  console.log('INFORMEISHON', imageInfo)

  if (!!image) {
    return <div style={style}><GatsbyImage image={image} alt={alt} className={className} key={key}/></div>
  } else if (!!childImageSharp) {
    return <div style={style}><GatsbyImage image={childImageSharp.gatsbyImageData} alt={alt} className={className} style={style} key={key}/></div>
  } else if (!!image && typeof image === 'string') {
    return <img src={image} alt={alt} className={className} style={style} key={key}/>
  } else {
    return null
  }
}

export default PreviewCompatibleImage