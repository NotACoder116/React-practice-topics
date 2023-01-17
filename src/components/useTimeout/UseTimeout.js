import { useState } from "react";
import CustomTimeoutHook from "./CustomTimeoutHook";

const UseTimeout = () => {
   const [count, setCount] = useState(10);
   const {clear, reset} = CustomTimeoutHook(()=> setCount(0), 1000);

   return <>
     <div>{count}</div>
     <button onClick={(c) => setCount(c => c+1)}>Increament</button>
     <button onClick={reset}>Reset</button>
     <button onClick={clear}>Clear</button>
   </>
}

export default UseTimeout;
