import React, { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'

const ParentDebounce = () => {
    const [count, setCount] = useState(0);

    const printValue = () => {
        setCount(prev => prev + 1);
    }

    const debounce = useDebounce(printValue, 2000);

    useEffect(() => {
        document.addEventListener('mousemove', debounce);

        return () => {
            window.removeEventListener("mousemove", debounce);
        };
    });

    return (
        <div>
            <label>{count}</label>
            {/* <button onClick={() =>  }></button> */}
        </div>
    )
}

export default ParentDebounce;
