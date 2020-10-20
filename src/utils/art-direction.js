export default img => {
  if (!img || !img.childImageSharp) return img

  const { childImageSharp: {sm, md, lg} } = img

  return [
    {
      ...sm,
      media: `(max-width: 400px)`
    },
    {
      ...md,
      media: `(max-width: 760px)`
    },
    lg
  ]
}