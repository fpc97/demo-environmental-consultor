import React from 'react'

import { parseNumber } from '../../utils'

const dummyData = [
  '+54 142 3124-421',
  '+54 142 3124-421'
]

export default () => (
  <>
    {dummyData.map((num, i) => <a className="phone-number" href={`tel:${parseNumber(num)}`} key={i}>{num}</a>)}
  </>
)