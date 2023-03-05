import { useState } from "react";
import RenderList from "./RenderList";

const LearnUseDeferred = () => {
   const [input, setInput] = useState('');

   const handleInput = (e) => {
    setInput(e.target.value);
   }

   return <>
     <input value={input} onChange={handleInput}/>
     <RenderList input={input} />
   </>
}

export default LearnUseDeferred;