import React, {useState, useEffect} from 'react'

const useWindowSize = () => {
    const [windowsSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        })
    }, [])
    return windowsSize
}

export default useWindowSize
