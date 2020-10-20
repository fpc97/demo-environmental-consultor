import React, { useEffect } from 'react'

import 'typeface-open-sans'
import 'typeface-raleway'

import './scss/main.scss'
import './layout.css'

import Navigation from './Navigation'
import Footer from './Footer'
import SEO from './SEO'

export default ({
  children,
  noTitle,
  noFooter,
  transparentMobile,
  // SEO
  description,
  lang,
  meta,
  title
}) => {
  useEffect(() => {
    let resizeTimer

    const handleResize = () => {
      // Animation stopper; borrowed from:
      // https://css-tricks.com/stop-animations-during-window-resizing/
      document.body.classList.add("resize-animation-stopper")

      clearTimeout(resizeTimer)

      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper")
      })
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  })

  return (
    <div>
      <SEO {...{ description, lang: 'es', meta, title }}/>
      <Navigation noTitle={noTitle} transparentMobile={transparentMobile}/>
      {children}
      {!noFooter && <Footer />}
    </div>
  )
}