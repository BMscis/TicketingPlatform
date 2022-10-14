import { createContext, useContext, useEffect, useState } from 'react';
const WindowContext = createContext()
export function windowHook(){
    return useContext(WindowContext)
}

export default function UseWindowDimensions({children}){
     const [windowDimensions, setWindowDimensions] = useState({
         width: undefined,
         height: undefined,
     });
     useEffect(() => {
         function handleResize(){
             setWindowDimensions({
                 width: window.innerWidth,
                 height: window.innerHeight,
             });
         }
         handleResize();
         window.addEventListener('resize', handleResize);
         return () => window.removeEventListener('resize', handleResize);
     }, []); // Empty array ensures that effect is only run on mount
    return (
        <>
        <WindowContext.Provider value={windowDimensions}>
            {children}
        </WindowContext.Provider>
        </>
    )
 };