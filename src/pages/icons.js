import React from 'react'

import { AllIcons } from '../components/Icon'

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

const Icons = () => (
  <AllIcons
    style={{
      ul: ulStyles,
      li: liStyles,
      icon: iconStyles,
      span: spanStyles
    }}
    size="3x"
  />
)

export default Icons