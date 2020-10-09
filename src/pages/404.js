import React, { useEffect, useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Intro from '../components/hero-section'

const NotFoundPage = () => {
  const [URL, setUrl] = useState(null)
  useEffect(() => setUrl(window.location.pathname))

  return (
    <Layout>
      <SEO title="Pagina no encontrada"/>
      <Intro
        title="Pagina no encontrada"
        lead={URL && `La pagina ${URL} no existe`}
      />
    </Layout>
  )
}
export default NotFoundPage
