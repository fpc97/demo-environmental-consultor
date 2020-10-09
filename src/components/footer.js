import React from 'react'

import Title from './top-bar/title'
import SocialMedia from './top-bar/social-media'
import PhoneNumbers from './top-bar/phone-numbers'
import Routes from './top-bar/routes'


const Footer = () => (
  <footer className="foot white">
    <div className="foot__info">
      <Title />
      <address className="foot__address">
        <div className="foot__social-media">
          <SocialMedia />
        </div>
        <div className="foot__phone-numbers">
          <PhoneNumbers />
        </div>
      </address>
    </div>
    <Routes
      classNamePrefix={'foot'}
      className="foot__routes foot__route foot__link foot__subroutes foot__subroute foot__sublink"  
    />
    <div className="foot__bottom">
      <p className="foot__copyright">
        © {new Date().getFullYear()} Evelina Cejuela y Asociados. Todos los derechos reservados
      </p>
    </div>
  </footer>
)

export default Footer