import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { AllIcons } from '../components/icon'

const ulStyles = {
  display: 'flex',
  flexFlow: 'wrap row',
  maxWidth: '1480px',
  margin: '50px auto 0'
}

const liStyles = {
  display: 'flex',
  flexFlow: 'nowrap column',
  padding: '14px',
  listStyle: 'none'
}

const iconStyles = {
  color: '#2a2a2a'
}

const spanStyles = {
  marginTop: '10px'
}

const Icons = () => {
  //const iconsList = Object.entries(SVGIcons)

  return (
    <AllIcons style={{
      ul: ulStyles,
      li: liStyles,
      icon: iconStyles,
      span: spanStyles
    }}/>
  )
}

export default Icons


/*
  <ul style={ulStyles}>
    {iconsList.map((a, i) => (<li key={i} style={liStyles}>
      <FontAwesomeIcon style={iconStyles} icon={a[1]} size="6x"/>
      <span style={spanStyles}>{a[0]}</span>
    </li>))}
  </ul>
*/