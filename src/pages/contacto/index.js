import React from 'react'
import Recaptcha from 'react-google-recaptcha'

import Layout from '../../components/Layout'

import ContactBundle from '../../components/ContactBundle'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

const Contacto = () => {
  return (
    <Layout title="Contact">
      <main>
        <div className="contacto__background">
          <header className="contacto__intro">
            <div className="container">
              <h2 className="contacto__h2">Contact</h2>
              <p className="contacto__lead lead">Send us a mail or contact us in social media</p>
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
          >
            <input type="hidden" name="form-name" value="Contact form"/>
            <label className="contact-form__label contact-form__label--nombre" for="nombre" id="label-nombre">Name</label>
            <input className="contact-form__text contact-form__text--nombre" type="text" id="nombre" name="nombre"/>
            <label className="contact-form__label contact-form__label--email" for="email" id="label-email">E-mail address*</label>
            <input className="contact-form__text contact-form__text--email" type="email" id="email" name="email" required/>
            <label className="contact-form__label contact-form__label--mensaje" for="mensaje" id="label-mensaje">Message*</label>
            <textarea className="contact-form__textarea" type="text" rows="10" cols="30" id="mensaje" name="mensaje" required></textarea>
            <Recaptcha sitekey={RECAPTCHA_KEY}/>
            <button type="submit" className="contact-form__submit" id="enviar" name="enviar">Send</button>
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