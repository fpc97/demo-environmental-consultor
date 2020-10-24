import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const routeMap = {
  "Servicios": {
    "index": '/servicios',
    "templateKeyMap": "servicio-individual"
  },
  "Sobre Nosotros": {
    "index": '/sobre-nosotros',
    "Por Qué Elegirnos": "/sobre-nosotros#elegirnos",
    "Nuestros Objetivos": "/sobre-nosotros#nuestros-objetivos",
    "Dónde Trabajamos": "/servicios#encontrarnos",
    "Nuestro Personal": "/personal"
  },
  "Trabajos Realizados": "/trabajos-realizados",
  "Contacto": "/contacto"
}

export default ({
  classNamePrefix,
  hasButtons
}) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              templateKey
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const classNameWithPrefix = className => classNamePrefix ? `${classNamePrefix}__${className}` : className

  /* Creators */
  const createLink = route => <li className={classNameWithPrefix('subroute')}>
    <Link to={route[1]} className={classNameWithPrefix('sublink')}>{route[0]}</Link>
  </li>

  const createSubroutes = subroutes => (<ul className={classNameWithPrefix('subroutes')}>
    {Object.entries(subroutes)
      .filter(route => route[0] !== 'index')
      .map(route => {
        if (route[0] !== 'templateKeyMap') {
          return createLink(route)
        } else {
          return templateKeyMap(route[1])
        }
    })}
  </ul>)
  /* Creators */

  const templateKeyMap = templateKey => {
    const edges = data.allMarkdownRemark.edges.filter(edge => {
      return edge.node.frontmatter.templateKey === templateKey
    })

    const routes = edges.map(edge => [
      edge.node.frontmatter.title,
      edge.node.fields.slug
    ])

    return routes.map(route => createLink(route))
  }

  const parseSection = item => {
    const hasSubsection = !(typeof item[1] === 'string')
    const mainURL = hasSubsection ? item[1].index : item[1]

    const SectionLink = () => <Link to={mainURL} className={classNameWithPrefix('link')}>{item[0]}</Link>
    const className = classNameWithPrefix('route')
  
    if (hasSubsection) {
      if (hasButtons) {
        return (
          <SectionWithButton className={className}>
            <SectionLink />
            {hasSubsection && createSubroutes(item[1])}
          </SectionWithButton>
        )
      } else {
        return (
          <li className={className}>
            <SectionLink />
            {hasSubsection && createSubroutes(item[1])}
          </li>
        )
      }
    } else {
      return (
        <li className={className}>
          <SectionLink />
        </li>
      )
    }
  }

  return (
    <ul className={classNameWithPrefix('routes')}>
      {Object.entries(routeMap).map(item => parseSection(item))}
    </ul>
  )
}

const SectionWithButton = ({
  className,
  children
}) => {
  const [isOn, toggleButton] = useState(false)

  const handleClick = () => toggleButton(!isOn)

  return (
    <li className={`${className}${isOn ? ' on' : ''}`}>
      <i role="button" onClick={handleClick} onKeyDown={handleClick} tabindex="0" aria-label={`deploy section ${className}`}>&nbsp;</i>
      {children}
    </li>
  )
}