import React from 'react'

import Title from './top-bar/title'
import SocialMedia from './top-bar/social-media'
import PhoneNumbers from './top-bar/phone-numbers'
import Routes from './top-bar/routes'


const Footer = () => (
  <footer className="footer white">
    <div className="footer__info">
      <Title />
      <address className="footer__address">
        <div className="footer__social-media">
          <SocialMedia />
        </div>
        <div className="footer__phone-numbers">
          <PhoneNumbers />
        </div>
      </address>
    </div>
    <Routes classNamePrefix={'footer'}/>
    <div className="footer__bottom">
      <a href="https://fpece.com" className="footer__dev-link">Diseño web</a>
      <p className="footer__copyright">
        © {new Date().getFullYear()} Evelina Cejuela y Asociados. Todos los derechos reservados
      </p>
    </div>
  </footer>
)

export default Footer