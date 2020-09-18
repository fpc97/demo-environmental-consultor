import React from 'react'

import { ServiciosPageTemplate } from '../../templates/servicios'

import SEO from '../../components/seo'
import Layout from '../../components/layout'

const ServiciosPage = () => {
  return (
    <Layout>
      <SEO title="Servicios"/>
      <ServiciosPageTemplate />
    </Layout>
  )
}

export default ServiciosPage