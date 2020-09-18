import React, { Component } from 'react'

class FollowingImage extends Component {
  constructor({ imageUrl = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*' }) {
    super()

    this.containerRef = React.createRef()

    this.state = {
      imgStyle: {
        top: '100px'
      },
      imageUrl
    }
  }

  handleScroll = e => {
    if (!window) return

    const containerBounds = this.containerRef.current.getBoundingClientRect(),
      containerWidth = containerBounds.right - containerBounds.left
    const viewportHeight = window.innerHeight
    const viewportWidth = window.innerWidth

    const isTop = containerBounds.top > 0
    const isBottom = containerBounds.bottom < viewportHeight

    /*if (isTop) {

    } else */
    const imgStyle = {}

    if (isBottom) {
      imgStyle.bottom = 0
    } else if (isTop) {
      imgStyle.top = 0
    } else {
      imgStyle.position = 'fixed'
      //imgStyle.top = `${-containerBounds.top}px`
      imgStyle.bottom = '0'
      imgStyle.right = `${viewportWidth - containerBounds.right}px`
      imgStyle.width = `${containerWidth}px`
    }

    Promise.resolve(
      this.setState({
        imgStyle
      }
    ))
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {

    return (
      <div className="following-image" ref={this.containerRef}>
        <img className="following-image__img" src={this.state.imageUrl} style={this.state.imgStyle}/>
      </div>
    )
  }
}
/*
const FollowingImage = ({ imageUrl = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*' }) => {
  const imgStyle = {
    top: 0
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div className="following-image" onScroll={handleScroll}>
      <img className="following-image__img" src={imageUrl} style={imgStyle}/>
    </div>
  )
}
*/
export default FollowingImage