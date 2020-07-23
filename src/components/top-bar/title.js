import React from 'react';

export default ({bottomBar = false}) => (
    <hgroup className={`title${bottomBar ? ' title--bottom-bar' : ''}`}>
        <h1 className="title__h1">Evelina Cejuela <small>y Asociados</small></h1>
        <span className="title__subtitle">Servicios de Consultoria Ambiental</span>
    </hgroup>
)