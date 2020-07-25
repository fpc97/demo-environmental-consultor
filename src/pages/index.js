import React from 'react';

import Layout from '../components/layout';
import SEO from "../components/seo";

import Title from '../components/top-bar/title';

import SlideShow from '../components/background-slideshow.js';

function mainButton(txt) {
    return (
        <button className="btn slide-btn">
            <span className="slide-btn__content slide-btn__content--first">{txt}</span>
            <span className="slide-btn__slider">
                <span className="slide-btn__content slide-btn__content--last">{txt}</span>
            </span>
        </button>
    )
}

export default () => (
    <Layout noTitle>
        <SEO title="Principal"/>

        <div className="home-background">
            <div className="home-background__slideshow">
                <SlideShow />
            </div>
            <div className="home-background__blue">
                <div className="home-background__gradient"></div>
                <div className="home-background__plain"></div>
            </div>
            <svg className="home-background__svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-name="Layer 1" viewBox="0 0 741 741" ><defs><linearGradient id="a" x1="487.9" x2="633.9" y1="432.8" y2="287.8" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#00408f"></stop><stop offset="1" stopColor="#003575"></stop></linearGradient><linearGradient id="b" x1="600.9" x2="518.9" y1="327" y2="406" xlinkHref="#a"></linearGradient><linearGradient id="c" x1="372.7" x2="724.7" y1="553.6" y2="198.6" xlinkHref="#a"></linearGradient><linearGradient id="d" x1="633.7" x2="475.7" y1="291.6" y2="450.6" xlinkHref="#a"></linearGradient><linearGradient id="e" x1="92.6" x2="277.9" y1="463.1" y2="277.9" xlinkHref="#a"></linearGradient><linearGradient id="f" x1="212.2" x2="161.5" y1="344" y2="394" xlinkHref="#a"></linearGradient><linearGradient id="g" x1="94.9" x2="272.2" y1="460.2" y2="284.2" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#003575"></stop> <stop offset="1" stopColor="#00408f"></stop> </linearGradient><linearGradient id="h" x1="139.1" x2="225.1" y1="416.5" y2="322.5" xlinkHref="#a"></linearGradient></defs><path fill="url(#a)" d="M741 371L551 561V180l190 191z"></path><path fill="url(#b)" d="M659 371L556 474V267l103 104z"></path><path fill="url(#c)" d="M556 0v741L185 371 556 0z"></path><path fill="url(#d)" d="M556 185v371L371 371l185-186z"></path><path fill="url(#e)" d="M371 371L185 556l-3-367 3-4 186 186z"></path><path fill="url(#f)" d="M245 371l-60 59V311l60 60z"></path><path fill="url(#g)" d="M185 185v371L0 371l185-186z"></path><path fill="url(#h)" d="M185 273v195l-97-97 97-98z"></path></svg>
        </div>
        
        <header className="header">

            <Title bottomBar/>
            <h2 className="header__h2"><span className="header__h2--first">BIOLOGIA</span> <br/><span className="header__h2--last">DIGITAL</span></h2>
            <div className="header__bottom-flex">
                <p className="header__intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                {mainButton('Saber Más →')}
            </div>
        </header>
    </Layout>
);