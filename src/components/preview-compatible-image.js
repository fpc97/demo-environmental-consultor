import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({
  imageInfo,
  className,
  sharpType = 'fluid'
}) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    if (sharpType === 'fluid') {
      return (
        <Img fluid={image.childImageSharp.fluid} alt={alt} className={className} />
      )
    } else {
      return (
        <Img fixed={image.childImageSharp.fixed} alt={alt} className={className} />
      )
    }
  } else if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} className={className} />
  } else if (!!image && typeof image === 'string') {
    return <img src={image} alt={alt} className={className} />
  } else {
    return null
  }
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage