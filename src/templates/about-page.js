import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Intro from '../components/intro'


const dummyData = {
    title: 'Equipamiento',
    brief: 'Hacemos uso de tecnologias versatiles y accesibles, etc etc, etc et,c',
    firstParagraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis',
    secondParagraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad'
}

const AboutPageTemplate = () => {
    return (
        <Layout>
            <SEO title="Sobre Nosotros"/>

            <Intro {...dummyData}/>
        </Layout>
    )
}

export default AboutPageTemplate