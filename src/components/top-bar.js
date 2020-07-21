import React from 'react';

import PhoneNumbers from './top-bar/phone-numbers';

import SocialMedia from './top-bar/social-media';

import Logo from './top-bar/logo';
//import Title from './top-bar/title';

import Navigation from './top-bar/navigation';

export default ({ noTitle }) => (
    <div className="top-bar">
        <div className="top-bar__top">
            <div className="top-bar__phones">
                <PhoneNumbers/>
            </div>
            {/*
            <div className="top-bar__contact-us">

            </div>
            */}
            <div className="top-bar__push-right">
                <div className="top-bar__social-media">
                    <SocialMedia/>
                </div>
            </div>
        </div>
        <div className="top-bar__bottom">
            <div className="top-bar__logo">
                <Logo noTitle={noTitle}/>
            </div>
            <Navigation />
        </div>
    </div>
)