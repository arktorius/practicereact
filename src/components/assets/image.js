import React from 'react'

import firstC from './01R.png'
import secondC from './02A.png'
import thirdC from './03H.png'


class Image extends React.Component {
    constructor(first, second, third) {
        this.first = firstC;
        this.second = secondC;
        this.third = thirdC;
        super();
    }
}

export default Image