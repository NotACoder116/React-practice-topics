import { useDeferredValue, useEffect, useMemo } from "react";

/** Check the console value in the use Effect, 
 * Deferred Value hook render the value whenever it is having time
 */

const RenderList = ({ input }) => {
    const deferredValue = useDeferredValue(input);

    let list = useMemo(() => {
        let l = [];
        for (let i = 0; i < 20000; i++) {
            l.push(<div key={i}>{deferredValue}</div>);
        }

        return l;
    })

    useEffect(() => {
        console.log(`Input - ${input} || Deferred value - ${deferredValue}`);
    }, [input, deferredValue])

    return list
}

export default RenderList;