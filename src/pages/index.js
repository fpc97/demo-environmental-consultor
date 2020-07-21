import React from 'react';

import Layout from '../components/layout';
import SEO from "../components/seo";

import Title from '../components/top-bar/title';

export default () => (
    <Layout noTitle>
        <SEO title="Principal"/>

        {/* BACKGROUND */}

        <header className="header">
            <Title/>
            <h2 className="header__h2"><span className="header__h2--first">BIOLOGIA</span> <br/><span className="header__h2--last">DIGITAL</span></h2>
            <p className="header__intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            <button className="header__main-button">Saber Más →</button>
        </header>
    </Layout>
);