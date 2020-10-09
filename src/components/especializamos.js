import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import { getMarkdownFirstImage, parseGraphQLEdges } from '../utils'
import FollowingImage from './following-image'

class Especializamos extends Component{
  constructor({ data }) {
    super()
    const imageLinks = new Map()

    const edges = parseGraphQLEdges(data)

    if (edges) edges.forEach(e => imageLinks.set(
      e.node.frontmatter.title,
      getMarkdownFirstImage(e.node.internal.content)
    ))

    edges.forEach(e => console.log(getMarkdownFirstImage(e.node.internal.content)))

    this.state = {
      imageLinks,
      isDataLoaded: !!edges
    }
  }

  switchImage(title, e) {
    if (e.currentTarget.tagName.toLowerCase() !== 'li') return

    const thisImage = this.state.imageLinks.get(title)

    this.setState({
      currentDisplayImage: thisImage
    })
  }

  render() {
    const generateList = () => parseGraphQLEdges(this.props.data).map((d, i) => (
      <li key={i} className="especializamos__item" onMouseEnter={this.switchImage.bind(this, d.node.frontmatter.title)}>
        <h4 className="especializamos__h4">{d.node.frontmatter.title}</h4>
        <p className="especializamos__descripcion">{d.node.excerpt}</p>
        <Link to={d.node.fields.slug} className="especializamos__leer-mas">Leer más</Link>
      </li>
    ))

    return (
      <article className="especializamos">
        <div className="especializamos__container container">
          <h3 className="especializamos__titulo">Áreas en las que Nos Especializamos</h3>
          <ul className="especializamos__lista">
            { this.state.isDataLoaded && generateList() }
          </ul>
  
          <div className="especializamos__ilustracion">
            <FollowingImage imgList={Array.from(this.state.imageLinks.values())} currentImg={this.state.currentDisplayImage}/>
          </div>
        </div>
      </article>
    )
  }
}

export default props => <StaticQuery 
  query={graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "servicios"}}}) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          internal {
            content
          }
        }
      }
    }
  }
  `}
  render={data => <Especializamos data={data} {...props}/>}
/>