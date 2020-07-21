import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/fontawesome-free-regular";
import { faLink } from "@fortawesome/fontawesome-free-solid";

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
}

const dummyData = [
    {
        site: 'twitter',
        link: 'http://twitter.com/ecj'
    },
    {
        site: 'facebook',
        link: 'http://twitter.com/ecj'
    },
    {
        site: 'instagram',
        link: 'http://twitter.com/ecj'
    }
];

export default () => (
    <>
        {dummyData.map(i => (
            <a className="social-media__a" href={i.link}>
                <FontAwesomeIcon className="social-media__icon" size="3x" icon={icons[i.site]||icons.default} />
            </a>
        ))}
    </>
)