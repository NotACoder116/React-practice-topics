import React, { forwardRef, useImperativeHandle, useState } from 'react'

const ChildForwardRef = (props, ref) => {
  const [text, setText] = useState('Hi from Child');  

  useImperativeHandle(ref, () => ({handleText}));
  
  const handleText = (value) => {
    setText(value)
  }  
  return (
    <div>
        {text}
    </div>
  )
}

export default forwardRef(ChildForwardRef);
