import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

const PreviewCompatibleImage = ({
  imageInfo,
  className,
  style = {},
  key,
  // defaultImage
  // sharpType = 'fluid'
}) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image) {
    return <div style={style}><GatsbyImage image={image} alt={alt} className={className} key={key} transformOptions={{ fit: 'cover' }}/></div>
  } else if (!!childImageSharp) {
    return <div style={style}><GatsbyImage image={childImageSharp.gatsbyImageData} alt={alt} className={className} style={style} key={key} transformOptions={{ fit: 'cover' }}/></div>
  } else if (!!image && typeof image === 'string') {
    return <img src={image} alt={alt} className={className} style={style} key={key}/>
  } else {
    return null
  }
}

export default PreviewCompatibleImage