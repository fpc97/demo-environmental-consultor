import React from 'react'

import SocialMedia from './SocialMedia'
import PhoneNumbers from './PhoneNumbers'
import EMails from './EMails'

const ContactBundle = ({ classNamePrefix }) => {
  return (
    <address className={`${classNamePrefix ? `${classNamePrefix}__` : ''}address`}>
      <div className={`${classNamePrefix ? `${classNamePrefix}__` : ''}social-media`}>
        <SocialMedia />
      </div>
      <div className={`${classNamePrefix ? `${classNamePrefix}__` : ''}phone-numbers`}>
        <PhoneNumbers />
      </div>
      <div className={`${classNamePrefix ? `${classNamePrefix}__` : ''}emails`}>
        <EMails />
      </div>
    </address>
  )
}

export default ContactBundle