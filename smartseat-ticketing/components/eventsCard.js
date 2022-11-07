import { param, parseHTML } from "jquery"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ReachContextHook } from "../context/CommonContext"
import EventTicket from "../pages/Buyer/EventTicket"

export default function EventsCard({parent}){
    const cloned = false
    const active = false
    const {context} = parent.props.parent.props.parent
    const [eImage, setEImage] = useState("")
    const regular = "owl-item"
    const actv = "owl-item active"
    const clond = "owl-item cloned"
    const actvCloned = "owl-item active cloned"
    const classType = active && cloned ? actvCloned :
                      active && !cloned ? actv :
                      !active && cloned ? clond : regular
    useEffect(()=>{
        console.log("USE EFFECT: ")
        context.getCardImage(
            parent.state.EVENT.EVENTIMAGE, setEImage,"event")
    },[])
    return (
        <>

<div className={classType} style={{width: "260px", marginRight: "25px",cursor: "pointer"}}>
<div className="d-item" style={{display: "block", backgroundSize: "cover"}}>
<div className="nft__item" style={{backgroundSize: "cover"}}>
<div className="nft__item_wrap" style={{backgroundSize: "cover", height: "218.25px"}}>
<button 
style={{width:"100%",height:"100%",background:"transparent"}}
onClick={()=>{
    parent.setState({...parent.state,IMAGE:eImage})
    parent.props.parent.setState({...parent.props.parent.state,
        view:"Wrapper",ContentView:EventTicket ,preview:{...parent,IMAGE:eImage,deploy:parent.deploy}})
}}>
<img src={eImage} className="lazy nft__item_preview" alt=""/>
</button>
</div>
<div className="nft__item_info" style={{textAlign: "center", backgroundSize: "cover"}}>
<h4>{parent.state.EVENT.EVENTNAME}</h4>
<span>{parent.state.EVENT.EVENTLOCATION}</span>
</div> 
</div>
</div></div>
    </>
    )
}