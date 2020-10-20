import React from 'react'

import artDirection from '../utils/art-direction'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

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
  console.log('ok...')

  const imageList = e.currentTarget.children,
    listLength = imageList.length

  if (listLength <= 1) return
  console.log('oksds...')

  let index = 0

  setInterval(() => {
    imageList[index].style.opacity = 0
    index = (index + 1) % listLength
    imageList[index].style.opacity = 1
  }, transitionIntervalTime)
}

export default ({ images }) => (
  <div className="slideshow" onLoad={startCycle}>
    {images.map((img, i) => <PreviewCompatibleImage imageInfo={{ image: artDirection(img) }} key={i} style={imageStyle}/>)}
  </div>
)