import { createContext, useContext, useState } from 'react';
const DimensionContext = createContext()
export function dimensionHook(){
    return useContext(DimensionContext)
}

export default function SetDimension({children}){
    const [pos, setPosition] = useState(0)
     const [trans, setTranslate] = useState("translate3d(0px, 0px, 0px)")
     const getDim = (w,n,p,d) => {
        const cd = 260 + 25
        const num = cd * n
        const sz = w > 1200 ? 1140 : 
                   w > 992 ? 960 :
                   w > 768 ? 720 :
                   w > 576 ? 540 : w
        const posi = d == "left" ? (pos + cd)%num : (pos - cd)%num
        //console.log("MV: ", posi)
        //console.log("TRRRRRRRRRRRR: ",`translate3d(${posi}px 0px 0px)`)
        setTranslate(`translate3d(${posi}px, 0px, 0px)`)
        setPosition(posi)
        return 
    }
     const val = {
        trans,
        getDim
     }
    return (
        <>
        <DimensionContext.Provider value={val}>
            {children}
        </DimensionContext.Provider>
        </>
    )
 };