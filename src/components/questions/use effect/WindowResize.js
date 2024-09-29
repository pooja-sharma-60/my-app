import React, { useEffect, useState } from 'react'

const WindowResize = () => {
    const [windowWidth , setWindowWidth] = useState(window.innerWidth)

    useEffect (() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize' ,handleResize)
        return () => {
            window.removeEventListener('resize' , handleResize)
        }
    })
  return (
    <div>WindowWidth : {windowWidth}px</div>
  )
}

export default WindowResize