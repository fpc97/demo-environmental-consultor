import React from 'react'
import { Link } from 'gatsby'

import Title from './Title'
import { SiteLogo as Logo } from './svgr/shapes'

export default ({dark, noTitle}) => (
  <Link className={`logo${dark ? ' logo--dark' : ''}${noTitle ? ' logo--no-title' : ''}`} to="/">
    <span className="invisible">Ir a página principal</span>
    {/*<svg className="logo__svg" xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 60 60" xmlSpace="preserve"><path d="M8 8v18h18v8H8v18h18v8H0V0h26v8zm52-8v60H34v-8h18V8H34V0z" className="logo__path"></path></svg>*/}
    {/*<svg className="logo__svg" xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 97 97" xmlSpace="preserve"><path d="M26.45 97H0V70.55A53.54 53.54 0 0026.45 97zm0-97A53.54 53.54 0 000 26.45V0h26.45zM97 48.5a48.49 48.49 0 01-46.62 48.46V81.95a33.5 33.5 0 000-66.9V.04A48.49 48.49 0 0197 48.5z" className="logo__path"></path><path d="M15.85 41h29.77v15H15.85a33.55 33.55 0 0029.77 25.88v15.04a48.51 48.51 0 010-96.84v15.05A33.55 33.55 0 0015.85 41z" className="logo__path"></path></svg>*/}
    <Logo className="logo__svg"/>
    {!noTitle && <Title/>}
  </Link>
)