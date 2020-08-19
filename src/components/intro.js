import React from 'react';

const Intro = ({
    title,
    brief,
    firstParagraph: p1,
    secondParagraph: p2
}) => {
    const formattedBrief = brief ? <p className="intro__brief brief">{brief}</p> : null
    const formattedCol1 = p1 ? <p className="intro__col intro__col--first">{p1}</p> : null
    const formattedCol2 = p2 ? <p className="intro__col intro__col--last">{p2}</p> : null

    const content = formattedCol1 || formattedCol2 ?
        <div className="intro__content">
            {formattedCol1}
            {formattedCol2}
        </div>
        : null

    return (
        <header className="intro">
            <div className="intro__container container">
                <h2 className="intro__title">{title}</h2>
                {formattedBrief}
                {content}
            </div>
        </header>
    );
};

export default Intro;