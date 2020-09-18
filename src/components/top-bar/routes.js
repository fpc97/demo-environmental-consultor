import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { parseFirstWord, toKebabCase } from '../../utils'
import { Link } from 'gatsby'

const sectionList = [
  'Servicios',
  'Sobre Nosotros',
  'Trabajos Realizados',
  'Clientes',
  'Contacto'
]

const SubSection = ({ data, classNamePrefix }) => {
  const titleList = data.map(d => d.node.frontmatter.title)

  return (
    <ul className={`${classNamePrefix}subroutes`}>
      {titleList.map((title, i) => (<li className={`${classNamePrefix}subroute`} key={i}>
        <Link className={`${classNamePrefix}sublink`} to={toKebabCase(title)}>
          {title}
        </Link>
      </li>))}
    </ul>
  )
}

const Section = ({
  name,
  route,
  data,
  classNamePrefix,
  isSelected
}) => {
  const hasSubsection = typeof data === 'object' ? data.edges.length > 0 : false

  const selectedSuffix = isSelected ? `--selected` : ''

  return (
    <li className={`${classNamePrefix}route${selectedSuffix}`}>
      <Link className={`${classNamePrefix}link`} to={`/${toKebabCase(name)}`}>{name}</Link>
      {hasSubsection && <SubSection data={data.edges} classNamePrefix={classNamePrefix} />}
    </li>
  )
}

const Routes = ({
  selected,
  classNamePrefix
}) => {
  const data = useStaticQuery(graphql`
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
  `)

  classNamePrefix = classNamePrefix ? `${classNamePrefix}__` : ''

  const parsedSectionList = sectionList.map(section => {
    const route = toKebabCase(section)

    return {
      name: section,
      route: route,
      data: data[parseFirstWord(section)],
      isSelected: route === selected
    }
  })

  return (
    <ul className={`${classNamePrefix}routes`}>
      {parsedSectionList.map((sec, i) => (<Section
        {...sec}
        classNamePrefix={classNamePrefix}
        key={i}
      />))}
    </ul>
  )
}

export default Routes