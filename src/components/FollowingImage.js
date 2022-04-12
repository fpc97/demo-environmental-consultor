import React, { Component } from 'react'

import PreviewCompatibleImage from './PreviewCompatibleImage'

class FollowingImage extends Component {
  constructor() {
    super()

    this.parentRef = React.createRef()

    this.state = {
      imgStyle: {
        top: 0
      }
    }
  }

  handleViewportChange = () => {
    const parent = this.parentRef.current
    
    const bounds = parent.getBoundingClientRect()
    const screenHeight = window.innerHeight

    const width = bounds.right - bounds.left

    const isTop = bounds.top > 0
    const isBottom = bounds.bottom < screenHeight

    const imgStyle = {
      position: 'absolute',
      top: 'auto',
      bottom: 'auto',
      width: `${width}px`
    }

    if (isTop) {
      imgStyle.top = 0
    } else if (isBottom) {
      imgStyle.bottom = 0
    } else {
      imgStyle.position = 'fixed'
      imgStyle.top = 0
    }
    
    this.setState({ imgStyle })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleViewportChange)
    window.addEventListener('resize', this.handleViewportChange)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleViewportChange)
    window.removeEventListener('resize', this.handleViewportChange)
  }

  render() {
    console.log(this.props.imgList)
    const generateImgs = () => this.props.imgList.map((img, i) => {
      const style = {
        transition: `opacity .6s`,
        opacity: this.props.currentImg === img[0] ? 1 : 0
      }
      
      return <PreviewCompatibleImage
        imageInfo={{
          image: img[1],
          alt: ''
        }}
        key={i}
        style={style}
        className="following-image__img"
      />
    })

    return (
      <div className="following-image" ref={this.parentRef}>
        <div className="following-image__container" style={this.state.imgStyle}>
          {generateImgs()}
        </div>
      </div>
    )
  }
}

export default FollowingImage