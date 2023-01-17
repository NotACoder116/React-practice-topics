import React, { useState, useRef, useEffect } from 'react'

function LearnRef() {
  const [inputVal, setInputVal] = useState('');
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current += 1;
  });
  return (
    <div>
        <input value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
        Hello Yadi. your count is {countRef.current}
    </div>
  )
}

export default LearnRef