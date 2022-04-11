import React from 'react';

export default ({bottomBar = false}) => (
  <hgroup className={`title${bottomBar ? ' title--bottom-bar' : ''}`}>
    <h1 className="title__h1">Sustainable Development</h1>
    <span className="title__subtitle">Environmental consulting services</span>
  </hgroup>
)