import React from 'react';

const dummyData = [
    '+54 142 3124-421',
    '+54 142 3124-421'
];

function parseNumber(num) {

    return [...num].map(a => a === ' ' ? '-' : a).join('');
}

export default () => (
    <>
        {dummyData.map(num => <a className="phone-number" href={`tel:${parseNumber(num)}`}>{num}</a>)}
    </>
);