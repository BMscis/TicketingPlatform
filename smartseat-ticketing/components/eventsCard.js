import Link from "next/link"
import { useEffect } from "react"
import { ReachContextHook } from "../context/CommonContext"
import { GetImages } from "../storage/store"

export default function EventsCard({props}){
    const cloned = false
    const active = false
    const {EVENTLOCATION,EVENTIMAGE,EVENTNAME,CONTRACTADDRESS,TOKENID,PRICE} = props
    console.log("EVENT CARD: ", EVENTLOCATION,EVENTIMAGE,EVENTNAME,active,cloned,CONTRACTADDRESS,TOKENID,PRICE)
    const {cardImage,getCardImage} = ReachContextHook()
    getCardImage(EVENTIMAGE)

    const regular = "owl-item"
    const actv = "owl-item active"
    const clond = "owl-item cloned"
    const actvCloned = "owl-item active cloned"
    const classType = active && cloned ? actvCloned :
                      active && !cloned ? actv :
                      !active && cloned ? clond : regular
    return (
        <>

<div className={classType} style={{width: "260px", marginRight: "25px"}}>
<div className="d-item" style={{display: "block", backgroundSize: "cover"}}>
<div className="nft__item" style={{backgroundSize: "cover"}}>
<div className="nft__item_wrap" style={{backgroundSize: "cover", height: "218.25px"}}>
<Link href={{pathname:"/BuyerClass",
query:{
    EVENTLOCATION:EVENTLOCATION,
    EVENTIMAGE:EVENTIMAGE,
    EVENTNAME:EVENTNAME,
    active:active,
    cloned:cloned,
    CONTRACTADDRESS:CONTRACTADDRESS,
    TOKENID:TOKENID,
    PRICE:PRICE
    }}}
>
<img src={cardImage} className="lazy nft__item_preview" alt=""/>
</Link>
</div>
<div className="nft__item_info" style={{textAlign: "center", backgroundSize: "cover"}}>
<h4>{EVENTNAME}</h4>
<span>{EVENTLOCATION}</span>
</div> 
</div>
</div></div>
    </>
    )
}