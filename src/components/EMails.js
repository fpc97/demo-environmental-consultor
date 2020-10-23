import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { objectDeepSearch } from '../utils'

export default () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "index/index.md"}) {
        childMarkdownRemark {
          frontmatter {
            emailaddresses
          }
        }
      }
    }`
  )

  const emailList = objectDeepSearch(
    data,
    ['file', 'childMarkdownRemark', 'frontmatter', 'emailaddresses']
  )

  return (
    <>
      {
        emailList && emailList.length ?
          emailList.map((email, i) => <a className="email-address" href={`mailto:${email}`} key={i}>{email}</a>) :
          <span>&nbsp;</span>
      }
    </>
  )
}