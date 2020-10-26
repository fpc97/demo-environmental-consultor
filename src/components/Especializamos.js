import React, { Component } from 'react'

import { Link } from 'gatsby'

import { parseGraphQLEdges, isNonDisplay, objectDeepSearch } from '../utils'
import artDirection from '../utils/art-direction'
import FollowingImage from './FollowingImage'

class Especializamos extends Component{
  constructor({
    servicios,
    defaultImage
  }) {
    super()
    const imageLinks = new Map()
    const edges = parseGraphQLEdges(servicios)

    if (edges) edges.forEach(edge => {
      const backgroundImage = objectDeepSearch(edge, ['node', 'frontmatter', 'header', 'background'])

      const availableBackground = backgroundImage && isNonDisplay(backgroundImage)

      imageLinks.set(
        edge.node.frontmatter.title,
        artDirection(
          availableBackground ?
            backgroundImage :
            defaultImage
        )
      )
    })

    this.state = {
      imageLinks,
      isDataLoaded: !!edges,
      excerptLength: 250
    }
  }

  switchImage(title, e) {
    if (e.currentTarget.tagName.toLowerCase() !== 'li') return

    this.setState({
      currentDisplayImage: title
    })
  }

  render() {
    const excerpt = intro => {
      if (intro.lead) return intro.lead
      const excerpt = intro.principal || intro.secundario
      const isLong = excerpt && excerpt.length > this.state.excerptLength
      return `${excerpt.slice(0, this.state.excerptLength)}${isLong ? '...' : ''}`
    }

    const generateList = () => parseGraphQLEdges(this.props.servicios).map((d, i) => (
      <li key={`serv-${i}`} className="especializamos__item" onMouseEnter={this.switchImage.bind(this, d.node.frontmatter.title)}>
        <h4 className="especializamos__h4">{d.node.frontmatter.title}</h4>
        {d.node.frontmatter.header && <p className="especializamos__descripcion">{excerpt(d.node.frontmatter.header)}</p>}
        <Link to={d.node.fields.slug} className="especializamos__leer-mas">Leer más</Link>
      </li>
    ))

    return (
      <article className="especializamos" id="especializamos">
        <div className="especializamos__container container">
          <h3 className="especializamos__titulo">Áreas en las que Nos Especializamos</h3>
          <ul className="especializamos__lista">
            { this.state.isDataLoaded && generateList() }
          </ul>
          <div className="especializamos__ilustracion">
            <FollowingImage
              imgList={Array.from(this.state.imageLinks.entries())}
              defaultImage={this.props.defaultImage}
              currentImg={this.state.currentDisplayImage}
            />
          </div>
        </div>
      </article>
    )
  }
}

export default Especializamos