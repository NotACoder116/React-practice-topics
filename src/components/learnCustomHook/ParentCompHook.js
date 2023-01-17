import React from 'react'
import useLocalStorage from './useLocalStorage'

export const ParentCompHook = () => {
  const [input, setInput] =  useLocalStorage('name', '');

  return (
    <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  )
}
