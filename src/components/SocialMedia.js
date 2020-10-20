import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { objectDeepSearch } from '../utils'

import { SocialMedia as SocialMediaIcon } from './Icon'

export default () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "index/index.md"}) {
        childMarkdownRemark {
          frontmatter {
            social_media {
              url
              site
            }
          }
        }
      }
    }
  `)

  const socialMediaList = objectDeepSearch(
    data,
    ['file', 'childMarkdownRemark', 'frontmatter', 'social_media']
  )

  return (
    <>
      {socialMediaList && socialMediaList.length ? socialMediaList.map((a, i) => (
        <a className="social-media__a" href={a.url} key={i}>
          <span className="social-media__span">Link a nuestro sitio en {a.site}</span>
          <SocialMediaIcon name={a.site} className="social-media__icon" size="3x"/>
        </a>
      )) : <span>&nbsp;</span>}
    </>
  )
}