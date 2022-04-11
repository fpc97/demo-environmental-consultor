import React from 'react'

import Title from './Title'
import Routes from './Routes'

import ContactBundle from './ContactBundle'

const Footer = () => (
  <footer className="foot white">
    <div className="foot__info">
      <Title />
      <ContactBundle
        classNamePrefix="foot"
        className="foot__address foot__social-media foot__phone-numbers foot__emails"  
      />
    </div>
    <Routes
      classNamePrefix="foot"
      className="foot__routes foot__route foot__link foot__subroutes foot__subroute foot__sublink"  
    />
    <div className="foot__bottom">
      <p className="foot__copyright">
        © {new Date().getFullYear()} Francisco Perez Cejuela
      </p>
    </div>
  </footer>
)

export default Footer