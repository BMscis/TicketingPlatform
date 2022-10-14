import Link from "next/link"

export default function EventsCard({props}){
    const {location,image,title,active,cloned,contractAddress,tokenID,price} = props
    console.log("EVENT CARD: ", price)
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
    location:location,
    image:image,
    title:title,
    active:active,
    cloned:cloned,
    contractAddress:contractAddress,
    tokenID:tokenID,
    price:price
    }}}
>
<img src={image} className="lazy nft__item_preview" alt=""/>
</Link>
</div>
<div className="nft__item_info" style={{textAlign: "center", backgroundSize: "cover"}}>
<h4>{title}</h4>
<span>{location}</span>
</div> 
</div>
</div></div>
    </>
    )
}