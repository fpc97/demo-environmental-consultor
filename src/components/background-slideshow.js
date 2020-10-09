import React from 'react'
import Img from 'gatsby-image'

const transitionIntervalTime = 6000

const imageStyle = {
  transition: `opacity 1s`,

  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%'
}

let isCycleStarted = false

function startCycle(e) {
  if (isCycleStarted) return
  isCycleStarted = true

  const imageList = e.currentTarget.children,
    listLength = imageList.length

  if (listLength <= 1) return

  let index = 0

  setInterval(() => {
    imageList[index].style.opacity = 0
    index = (index + 1) % listLength
    imageList[index].style.opacity = 1
  }, transitionIntervalTime)
}

export default ({ images }) => (
  <div className="slideshow" onLoad={startCycle}>
    {images.map((a, i) => <Img className="slideshow__image" fluid={a} style={imageStyle} key={i}/>)}
  </div>
)