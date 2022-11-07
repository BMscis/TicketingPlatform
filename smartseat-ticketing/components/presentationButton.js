import { ReachContextHook } from "../context/CommonContext"
import { windowHook } from "../context/Dimensions"
import { dimensionHook } from "../context/SetDimension"

export default function PresentationButton(props){
    const {direction} = props
    const { upcomingEvent } = ReachContextHook()
    const {width,height} = windowHook()
    const {getDim} = dimensionHook()
    const eventNum = upcomingEvent.events.length
    const pos = direction == "left" ?  "owl-prev" : "owl-next"
    const dir = direction == "left" ?  "fa fa-chevron-left" : "fa fa-chevron-right"
    let po = -1
    return (
        <>
        <button type="button" onClick={()=>{getDim(width,eventNum,po += 1,direction)}} role="presentation" className={pos}><i className={dir}></i></button>
        <button type="button" onClick={()=>{getDim(width,eventNum,po += 1,direction)}} role="presentation" className={pos}><i className={dir}></i></button>
        </>
    )
}