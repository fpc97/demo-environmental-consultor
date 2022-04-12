import React, { useEffect, useRef } from 'react'

import { useStaticQuery, graphql } from 'gatsby'

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
let interval

function startCycle(slideShow) {
  if (isCycleStarted) return
  isCycleStarted = true

  const imageList = slideShow.children,
    listLength = imageList.length

  if (listLength <= 1) return

  let index = 0

  interval = setInterval(() => {
    imageList[index].style.opacity = 0
    index = (index + 1) % listLength
    imageList[index].style.opacity = 1
  }, transitionIntervalTime)
}

export default ({ images }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "default-bat.jpg"}) {
        childImageSharp{
          ...ArtDirection
        }
      }
    }
  `)

  const { file } = data

  if (images.length === 0) images.push(file)
  const slideShowRef = useRef(null)

  useEffect(() => {
    startCycle(slideShowRef.current)

    return () => {
      if (interval) clearInterval(interval)
    }
  })

  return (
    <div className="slideshow" ref={slideShowRef} style={{ opacity: .85 }}>
      {images.map((img, i) => <PreviewCompatibleImage imageInfo={{ image: artDirection(img) }} key={i} style={imageStyle}/>)}
    </div>
  )
}