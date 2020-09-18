import React, { Component } from 'react'

class FollowingImage extends Component {
  constructor({ imageUrl = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*' }) {
    super()

    this.imgRef = React.createRef()

    this.state = {
      imgStyle: {
        top: '100px'
      },
      imageUrl
    }
  }

  // Have to use refs because setState updates asynchronously making the animation look glitchy
  handleScroll = e => {
    if (!window) return

    const img = this.imgRef.current,
      parent = img.parentElement

    const parentBounds = parent.getBoundingClientRect()
    const screenHeight = window.innerHeight

    const isTop = parentBounds.top > 0
    const isBottom = parentBounds.bottom < screenHeight

    const style = {
      top: 'auto',
      bottom: 'auto'
    }

    if (isBottom) {
      style.bottom = 0
    } else {
      style.top = `${Math.max(0, -parentBounds.top)}px`
    }

    for (const prop in style) img.style[prop] = style[prop]
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {

    return (
      <div className="following-image">
        <img className="following-image__img" src={this.state.imageUrl} style={this.state.imgStyle} ref={this.imgRef}/>
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