import React, { useState } from 'react'
import useStateWithHistory from './useStateWithHistory'

export const ParentHistory = () => {
  const [value, setValue, goBack, goForward, history] = useStateWithHistory(10);
  const [input, setInput] = useState("");
  return (
    <div>
        <div>UseStateWithHistory</div>
        <label>{value}</label>
        <label>History = {history}</label><br></br>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={() => setValue(input)}>Set Value</button>
        <button onClick={goBack}>Go Back</button>
        <button onClick={goForward}>Go Forward</button>
        <button onClick={goBack}>Go Back</button>
    </div>
  )
}
