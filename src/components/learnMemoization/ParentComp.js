import { useCallback, useState } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const handleCounter = useCallback((e) => setCount(count+e), [count]);

    return <div>
        <h1>{count}</h1> 
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => setCount(prev => prev+1)}>Click Me</button>
        <ChildComp count={count} updateCounter={handleCounter}/>
    </div>
}

export default ParentComp;