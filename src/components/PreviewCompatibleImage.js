import React from 'react'
import { GatsbyImage as Img } from "gatsby-plugin-image"

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
        <Img fluid={image.childImageSharp.fluid} alt={alt} className={className} style={style} key={key}/>
      )
    } else {
      return (
        <Img fixed={image.childImageSharp.fixed} alt={alt} className={className} style={style} key={key}/>
      )
    }
  } else if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} className={className} style={style} key={key}/>
  } else if (Array.isArray(image)) {
    return <Img fluid={image} alt={alt} className={className} style={style} key={key}/>
  } else if (!!image && typeof image === 'string') {
    return <img src={image} alt={alt} className={className} style={style} key={key}/>
  } else {
    return null
  }
}

export default PreviewCompatibleImage