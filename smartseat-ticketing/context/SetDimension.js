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
        const sz = w > 1200 ? 1140 : 
                   w > 992 ? 960 :
                   w > 768 ? 720 :
                   w > 576 ? 540 : w
        console.log("SZ: ",sz)
        const ft = Math.floor(sz/cd)
        console.log("FT: ",ft)
        const tr = Math.floor(n/ft) < ft ? ft : Math.floor(n/ft)
        console.log("TR: ", tr)
        const mv = p > tr ? 0 :
                   p < tr ? tr - p :
                   p == tr ? 0 : 0
        const posi = d == "left" ? pos + cd : pos - cd
        console.log("MV: ", posi)
        console.log("TRRRRRRRRRRRR: ",`translate3d(${posi}px 0px 0px)`)
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