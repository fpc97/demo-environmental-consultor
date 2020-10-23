import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Intro from '../components/HeroSection'

const NotFoundPage = () => {
  const [URL, setUrl] = useState(null)
  useEffect(() => setUrl(window.location.pathname), [])

  return (
    <Layout>
      <SEO title="Página no encontrada"/>
      <Intro
        title="Página no encontrada"
        lead={URL && `La página ${URL} no existe`}
      />
    </Layout>
  )
}
export default NotFoundPage
