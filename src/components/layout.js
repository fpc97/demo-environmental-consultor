import React, {useEffect} from 'react'

import 'typeface-open-sans'
import 'typeface-raleway'

import './scss/main.scss'
import './layout.css'

import TopBar from './top-bar'
import Footer from '../components/footer'

export default ({children, noTitle, noFooter}) => {
  useEffect(() => {
    let resizeTimer
    window.addEventListener("resize", () => {
      // Animation stopper; borrowed from:
      // https://css-tricks.com/stop-animations-during-window-resizing/
      document.body.classList.add("resize-animation-stopper")
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper")
      })
    })
  })
  return (
    <div>
      {/*<TopBar noTitle={noTitle}/>*/}
      {children}
      {!noFooter && <Footer />}
    </div>
  )
}