import React, { useState } from 'react'
import Recaptcha from 'react-google-recaptcha'
import { navigate } from 'gatsby-link'

import { encode } from '../../utils'

import Layout from '../../components/Layout'

import ContactBundle from '../../components/ContactBundle'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

const Contacto = () => {
  const [captchaCode, handleCaptcha] = useState(null)
  const [formContent, addForm] = useState({})

  const handleChange = e => addForm(
    Object.assign(formContent, {[e.target.name]: e.target.value})
  )

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': captchaCode,
        ...formContent
      })
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch(error => alert(error))
  }

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
          <form
            className="contact-form"
            name="Contact form"
            method="POST"
            action="/contacto/exito"
            data-netlify="true"
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" onLoad={handleChange} value="Contact form"/>
            <label className="contact-form__label contact-form__label--nombre" for="nombre" id="label-nombre">Nombre</label>
            <input className="contact-form__text contact-form__text--nombre" onChange={handleChange} type="text" id="nombre" name="nombre"/>
            <label className="contact-form__label contact-form__label--email" for="email" id="label-email">Direccion de e-mail*</label>
            <input className="contact-form__text contact-form__text--email" onChange={handleChange} type="email" id="email" name="email" required/>
            <label className="contact-form__label contact-form__label--mensaje" for="mensaje" id="label-mensaje">Mensaje*</label>
            <textarea className="contact-form__textarea" type="text" rows="10" onChange={handleChange} cols="30" id="mensaje" name="mensaje" required></textarea>
            <Recaptcha
              sitekey={RECAPTCHA_KEY}
              onChange={value => handleCaptcha(value)}
            />
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