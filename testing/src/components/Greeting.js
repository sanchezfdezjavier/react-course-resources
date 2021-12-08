import React from 'react'
import { useState } from 'react'

import Output from './Output';

export default function Greeting() {
    const [test, setText] = useState(false);

    const onClickHandler = () => {
        setText(true)
    }
    return (
        <div>
            <h2>Hello world!</h2>
            {!test && <Output>It's good to see you</Output>}
            {test && <Output>Changed</Output>}
            <button onClick={onClickHandler}>Change text</button>
        </div>
    )
}
