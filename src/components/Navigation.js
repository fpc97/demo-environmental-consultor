import React, { useState, useEffect } from 'react'

import Routes from './Routes'
import Logo from './Logo'
import PhoneNumbers from './PhoneNumbers'
import SocialMedia from './SocialMedia'

const BREAKPOINT = 850
const TITLE_HIDE = 1200

const Navigation = ({
  noTitle,
  transparentMobile,
  blueNav
}) => {
  const [isMobile, toggleMobile] = useState(false)
  const [isInited, initialize] = useState(false)
  const [isLogoHidden, toggleLogo] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      width < BREAKPOINT ? toggleMobile(true) : toggleMobile(false)
      width < TITLE_HIDE ? toggleLogo(true) : toggleLogo(false)
    }
    handleResize()

    initialize(true)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return <>
    {(!isInited || isMobile) && <MobileNavigation transparent={transparentMobile} blueNav={blueNav}/>}
    {(!isInited || !isMobile) && <DesktopNavigation noTitle={noTitle || isLogoHidden}/>}
  </>
}

const MobileNavigation = ({ transparent, blueNav = false }) => {
  const [isBurgerOpen, toggleBurger] = useState(false)
  const [isScrolled, toggleScrolled] = useState(false)

  const burgerHandler = () => toggleBurger(!isBurgerOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) toggleScrolled(true)
      else toggleScrolled(false)
    }
    handleScroll()

    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)
  })

  return (
    <div
      className={`navigation-mobile${isBurgerOpen ? ' open': ' closed'}
      ${transparent || !isScrolled ? ' transparent' : ''}
      ${blueNav ? ' blue-nav' : ''}`}
    >
      <i className="navigation-mobile__circle">&nbsp;</i>
      <div className="navigation-mobile__top">
        <div className="navigation-mobile__logo">
          <Logo noTitle/>
        </div>
        <div
          className="navigation-mobile__toggle"
          role="button"
          onClick={burgerHandler}
          onKeyDown={burgerHandler}
          tabindex="0"
          aria-label="Show navigation menu visual interface"
        ><i className="line">&nbsp;</i></div>
      </div>
      <Routes
        classNamePrefix="navigation-mobile"
        className="navigation-mobile__routes navigation-mobile__route navigation-mobile__link navigation-mobile__subroutes navigation-mobile__subroute navigation-mobile__sublink"   
        hasButtons
      />
      <address className="navigation-mobile__bottom">
        <div className="navigation-mobile__phonenumbers">
          <PhoneNumbers />
        </div>
        <div className="navigation-mobile__socialmedia">
          <SocialMedia />
        </div>
      </address>
    </div>
  )
}

const DesktopNavigation = ({ noTitle }) => {
  return (
    <div className="navigation-desktop">
      <div className="navigation-desktop__top">
        <div className="navigation-desktop__phones">
          <PhoneNumbers/>
        </div>
        <div className="navigation-desktop__push-right">
          <div className="navigation-desktop__social-media">
            <SocialMedia/>
          </div>
        </div>
      </div>
      <div className="navigation-desktop__bottom">
        <div className="navigation-desktop__logo">
          <Logo noTitle={noTitle}/>
        </div>
        <Routes
          classNamePrefix="navigation-desktop"
          className="navigation-desktop__routes navigation-desktop__route navigation-desktop__link navigation-desktop__subroutes navigation-desktop__subroute navigation-desktop__sublink"   
        />
      </div>
    </div>
  )
}

export default Navigation