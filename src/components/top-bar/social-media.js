import React from 'react'

import { SocialMedia as SocialMediaIcon } from '../icon'
/*
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faYoutube,
  faFacebook,
  faLinkedin,
  faBlogger,
  faInstagram,
  faDiscord,
  faReddit,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/fontawesome-free-regular"
import { faLink } from "@fortawesome/fontawesome-free-solid"

const icons = {
  facebook: faFacebook,
  twitter: faTwitter,
  youtube: faYoutube,
  linkedin: faLinkedin,
  blogger: faBlogger,
  instagram: faInstagram,
  discord: faDiscord,
  reddit: faReddit,
  googleplus: faGooglePlus,
  mail: faEnvelope,
  default: faLink
}*/

const dummyData = [
  {
    site: 'Twitter',
    link: 'http://twitter.com/ecj'
  },
  {
    site: 'Google+',
    link: 'http://twitter.com/ecj'
  },
  {
    site: 'Instagram',
    link: 'http://twitter.com/ecj'
  }
]

export default () => (
  <>
    {dummyData.map((a, i) => (
      <a className="social-media__a" href={a.link} key={i}>
        <span className="social-media__span">Link a nuestro sitio en {a.site}</span>
        <SocialMediaIcon name={a.site} className="social-media__icon" size="3x"/>
      </a>
    ))}
  </>
)