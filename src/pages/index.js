import React from 'react';

import Layout from '../components/layout';
import SEO from "../components/seo";

import Title from '../components/top-bar/title';

export default () => (
    <Layout noTitle>
        <SEO title="Principal"/>
        {/* BACKGROUND */}
        <div className="home-background">
            <div className="home-background__slideshow">&nbsp;</div>
            <div className="home-background__blue">
                <div className="home-background__gradient"></div>
                <div className="home-background__plain"></div>
            </div>
            <div className="home-background__svg">&nbsp;</div>
        </div>

        <header className="header">
            <Title bottomBar/>
            <h2 className="header__h2"><span className="header__h2--first">BIOLOGIA</span> <br/><span className="header__h2--last">DIGITAL</span></h2>
            <div className="header__bottom-flex">
                <p className="header__intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                <button className="header__main-button">Saber Más →</button>
            </div>
        </header>
    </Layout>
);