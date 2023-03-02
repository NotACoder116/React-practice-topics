import React from 'react'

export const ParentHoc = () => {
  return (
    <>
      <div><ChildHocRed cmp={Counter} /></div>
      <div><ChildHocBlue cmp={Counter} /></div>
    </>
  )
}

function Counter() {
  return <div>Counter</div>
}

export const ChildHocRed = (props) => {
  return (
    <div style={{ 'color': 'red' }}><props.cmp /></div>
  )
}

const ChildHocBlue = (props) => {
  return (
    <div style={{ 'color': 'blue' }}><props.cmp /></div>
  )
}
