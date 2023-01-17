import React from 'react'
import { useAsync } from './useAsync';

const fakeCallApi = () => {
    return new Promise((resolve, reject) => {
        let rn = Math.random() * 10;
        rn > 5 ? resolve("Success") : reject("Error");
    })
  }  

const LearnParentAsync = () => {
  const { value, status, error } = useAsync(fakeCallApi, true);  
  return (
    <div>
       <div>Value: {value}</div>
       <div>State: {status}</div>
       <div>Error: {error}</div>
    </div>
  )
}

export default LearnParentAsync;
