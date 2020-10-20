import React from 'react'

import Layout from '../../components/Layout'

import ContactBundle from '../../components/ContactBundle'

const Contacto = () => {
  return (
    <Layout title="Contacto">
      <main>
        <div className="contacto__background">
          <header className="contacto__intro">
            <div className="container">
              <h2 className="contacto__h2">Contacto</h2>
              <p className="contacto__lead lead">Envíenos un mail o contáctenos en nuestras redes sociales</p>
            </div>
          </header>
        </div>
        <div className="container">
          <form className="contact-form">
            <label className="contact-form__label contact-form__label--nombre">Nombre</label>
            <input className="contact-form__text contact-form__text--nombre" type="text" id="nombre" name="enviar"/>
            <label className="contact-form__label contact-form__label--nombre">Direccion de e-mail</label>
            <input className="contact-form__text contact-form__text--email" type="email" id="email" name="enviar" required/>
            <label className="contact-form__label contact-form__label--nombre">Mensaje</label>
            <textarea className="contact-form__textarea" type="text" rows="10" cols="30" id="mensaje" name="enviar" required></textarea>
            <button type="submit" className="contact-form__submit" id="enviar" name="enviar">Enviar</button>
          </form>
          <ContactBundle
            classNamePrefix="contacto"
            className="contacto__address contacto__social-media contacto__phone-numbers contacto__emails"  
          />
        </div>
      </main>
    </Layout>
  )
}

export default Contacto