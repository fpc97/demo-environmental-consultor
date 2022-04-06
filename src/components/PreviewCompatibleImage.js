import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

const PreviewCompatibleImage = ({
  imageInfo,
  className,
  style = {},
  key,
  sharpType = 'fluid'
}) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    if (sharpType === 'fluid') {
      return (
        <GatsbyImage fluid={image.childImageSharp.fluid} alt={alt} className={className} style={style} key={key}/>
      )
    } else {
      return (
        <GatsbyImage fixed={image.childImageSharp.fixed} alt={alt} className={className} style={style} key={key}/>
      )
    }
  } else if (!!childImageSharp) {
    return <GatsbyImage fluid={childImageSharp.fluid} alt={alt} className={className} style={style} key={key}/>
  } else if (Array.isArray(image)) {
    return <GatsbyImage fluid={image} alt={alt} className={className} style={style} key={key}/>
  } else if (!!image && typeof image === 'string') {
    return <img src={image} alt={alt} className={className} style={style} key={key}/>
  } else {
    return null
  }
}

export default PreviewCompatibleImage