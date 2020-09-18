import React from 'react'

import {Link, StaticQuery} from 'gatsby'

import followAlong from '../follow-along-ul'

import Logo from './logo'
import NavIcon from './nav-icon'

import PhoneNumbers from './phone-numbers'
import SocialMedia from './social-media'

const Navigation = ({data: data}) => {
  function createSection(name, route, categoryName) {
    if (!name || !route || !categoryName) throw new Error('createSection needs three arguments (name, route, categoryName)')

    const dataToExtract = data[categoryName] || false
    const isEdges = dataToExtract ? !!dataToExtract.edges.length : false

    const categoryNameNoSpace = categoryName.split(' ')[0]

    const subsections = isEdges && dataToExtract.edges.map((d, i) => (
      <li className="nav-dropdown__li" key={i}>
        <Link className="nav-dropdown__link" to='/'>{d.node.frontmatter.title}</Link>
      </li>
    ))

    const completeSubsections = !isEdges ? '' : (
      <>
        <input className="navigation__check" id={categoryNameNoSpace} type="checkbox"></input>
        <label className="navigation__arrow" htmlFor={categoryNameNoSpace}>&nbsp</label>
        <ul className="nav-dropdown">{subsections}</ul>
      </>
    )

    return (
      <li
        className={`navigation__li${isEdges ? ' navigation__li--dd' : ''}`}
        onMouseEnter={followAlong}
      >
        <Link className="navigation__link" to={route}>{name}</Link>
        {completeSubsections}
      </li>
    )
  }

  return (
    <>
      <NavIcon />
      <nav className="navigation">
        <div className="navigation__bg-info navigation__bg-info--top">
          <Logo/>
        </div>
        <ul className="navigation__ul">
          {createSection('Servicios', '/servicios', 'servicios')}
          {createSection('Sobre Nosotros', '/sobre-nosotros', 'sobre')}
          {createSection('Trabajos Realizados', '/trabajos-realizados', 'trabajos')}
          {createSection('Clientes', '/clientes', 'clientes')}
          {createSection('Contacto', '/contacto', 'contacto')}
        </ul>
        <div className="navigation__bg-info navigation__bg-info--bottom">
          <div className="navigation__phones">
            <PhoneNumbers/>
          </div>
          <div className="navigation__social-media">
            <SocialMedia/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        servicios: allMarkdownRemark(filter: {frontmatter: {category: {eq: "servicios"}}}) {
          edges {
            node {
              frontmatter{
                title
              }
            }
          }
        }
        trabajos: allMarkdownRemark(filter: {frontmatter: {category: {eq: "trabajos"}}}) {
          edges {
            node {
              frontmatter{
                title
              }
            }
          }
        }
        sobre: allMarkdownRemark(filter: {frontmatter: {category: {eq: "sobre-nosotros"}}}) {
          edges {
            node {
              frontmatter{
                title
              }
            }
          }
        }
      }
    `}
    render={data => <Navigation data={data} />}
  />
)