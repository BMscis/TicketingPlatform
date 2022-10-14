
export default function PresentationButton(props){
    const {direction,width,height,getDim,eventNum} = props

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