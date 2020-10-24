import React from 'react'

import Layout from '../components/Layout'
import Intro from '../components/HeroSection'

import { HTMLContent } from '../components/Content'

const ServicioIndividual = ({ pageContext: { html, title } }) => (
  <Layout title={title}>
    <ServicioIndividualPageTemplate html={html} title={title}/>
  </Layout>
)

export default ServicioIndividual

export const ServicioIndividualPageTemplate = ({
  title,
  html
}) => (
  <>
  {console.log(html)}
    <Intro title={title}/>
    <main className="servicio-individual">
      <div className="servicio-individual__container container">
        <HTMLContent content={html}/>
      </div>
    </main>
  </>
)