import React, { useEffect, useState } from 'react'

const WithSetInterval = () => {
    const [count ,setCount] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        },1000);
        return () => clearInterval(interval);
    } , [])
  return (
   <p>{count}</p>
  )
}

export default WithSetInterval