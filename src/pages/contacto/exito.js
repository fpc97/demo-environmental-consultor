import React from 'react'

import Layout from '../../components/Layout'
import Intro from '../../components/HeroSection'

const Exito = () => {
  return (
    <Layout title="Mensaje enviado">
      <Intro
        title="Mensaje enviado con éxito"
        lead="Gracias por comunicarse con nosotros!"
      />
    </Layout>
  )
}

export default Exito