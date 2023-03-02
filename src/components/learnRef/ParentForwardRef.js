import React from 'react'
import { useRef } from 'react';
import ChildForwardRef from './ChildForwardRef';

export const ParentForwardRef = () => {
    const childRef = useRef();

    return (
        <div>
            <button onClick={(e) => childRef.current.handleText("Hi from parent")}>Click Me</button>
            <ChildForwardRef ref={childRef} />
        </div>
    )
}
