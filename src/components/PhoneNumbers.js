import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import { parseNumber, objectDeepSearch } from '../utils'

export default () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "index/index.md"}) {
        childMarkdownRemark {
          frontmatter {
            phonenumbers
          }
        }
      }
    }`
  )

  const numberList = objectDeepSearch(
    data,
    ['file', 'childMarkdownRemark', 'frontmatter', 'phonenumbers']
  )

  return (
    <>
      {
        numberList && numberList.length ?
          numberList.map((num, i) => <a className="phone-number" href={`tel:${parseNumber(num)}`} key={i}>{num}</a>) :
          <span>&nbsp;</span>
      }
    </>
  )
}