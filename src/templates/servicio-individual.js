import React from 'react'

import Layout from '../components/Layout'
import Intro from '../components/HeroSection'

import { HTMLContent } from '../components/Content'

const ServicioIndividual = ({ pageContext }) => (
  <Layout title={pageContext.title}>
    <ServicioIndividualPageTemplate html={pageContext.html} header={pageContext.header} title={pageContext.title}/>
  </Layout>
)

export default ServicioIndividual

export const ServicioIndividualPageTemplate = ({
  title,
  header,
  html
}) => (
  <>
    <Intro {...header} title={title}/>
    <main className="servicio-individual">
      <div className="servicio-individual__container container">
        <HTMLContent content={html}/>
      </div>
    </main>
  </>
)