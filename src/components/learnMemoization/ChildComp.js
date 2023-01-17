import React, { memo, useMemo } from 'react'

const ChildComp = ({ count, updateCounter }) => {

    const childNumber = useMemo(() => {
        let output = 0;
        for (let i=0;i<500_000_000;i++) {
            output++;
        }
        return output
    }, []);
    

    console.log("Rendered");

    return (
        <>
            <label>Child Counter - {childNumber} - {count}</label>
            <div>ChildComp</div>
            <button type="text" onClick={() => updateCounter(1)}>Click me from Child</button>
        </>
    )
}

export default memo(ChildComp);
