import React, { useRef } from 'react'
import useOnScreen from './useOnScreen';

const Example = ({ number }) => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    return (
        <div ref={ref} className="box">
            {number}
            {isVisible ? ` I am on screen` : ` I am invisible`}
        </div>
    );
}

const ParentOnScreen = () => {
    let arr = [];
    for (let i = 0; i < 50; i++) {
        arr.push(<Example key={i} number={i} />)
    }
    return arr;
}

export default ParentOnScreen;
