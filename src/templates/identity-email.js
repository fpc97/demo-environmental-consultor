import React from 'react'

export default () => (
  <div>
    <div>
      <h2>You have been invited</h2>
      <p>You have been invited to create a user on <a href="{{ .SiteURL }}">ECyA</a>. Follow this link to accept the invite:</p>
      <p><a href="{{ .SiteURL }}/admin/#invite_token={{ .Token }}">Accept the invite</a></p>
    </div>
  </div>
)