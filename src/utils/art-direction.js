import { getImage, withArtDirection } from "gatsby-plugin-image"

const layouts = {
  sm: 400,
  md: 760
}

export default img => {
  if (!img || !img.childImageSharp) return img

  const processed = Object.entries(img.childImageSharp)
    .filter(img => img[0] in layouts)
    .map(img => {
      return {
        image: getImage(img[1]),
        media: `(max-width: ${layouts[img[0]]}px)`
      }
    })

  return withArtDirection(getImage(img.childImageSharp.lg), processed)
}