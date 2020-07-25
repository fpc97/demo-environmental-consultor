import React from 'react';
import {useStaticQuery, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';

const transitionIntervalTime = 6000;    // 6000

const imageStyle = {
    transition: `opacity 1s`,

    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
};


let isCycleStarted = false;

function startCycle(e) {
    if (isCycleStarted) return;
    isCycleStarted = true;

    const imageList = e.currentTarget.children,
        listLength = imageList.length;

    if (listLength <= 1) return;

    let index = 0;

    setInterval(() => {
        imageList[index].style.opacity = 0;
        index = (index + 1) % listLength;
        imageList[index].style.opacity = 1;

    }, transitionIntervalTime);
}

export default () => {
    const data = useStaticQuery(graphql`
        query{
            allFile (filter: {name: {regex: "/home-slideshow/"}}){
                nodes{
                    childImageSharp{
                        fluid (maxWidth: 1920, quality: 100){
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    `);

    const images = data.allFile.nodes;

    return (
        <div className="slideshow" onLoad={startCycle}>
            {images.map((a, i) => <Img className="slideshow__image" fluid={a.childImageSharp.fluid} style={imageStyle} key={i}/>)}
        </div>
    );
}