export default function CarouselCard({props}){
    const {source,EVENTIMAGE,EVENTNAME,active,cloned} = props
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
    <div className="nft_coll" style={{backgroundSize: "cover"}}>
        <div className="nft_wrap" style={{backgroundSize: "cover"}}>
            <a href="#"><img src={source} height={145} className="lazy img-fluid" alt=""/></a>
        </div>
        <div className="nft_coll_pp" style={{backgroundSize: "cover"}}>
            <a href="#"><img className="lazy pp-coll" src={EVENTIMAGE} alt=""/></a>
            <i className="fa fa-check"></i>
        </div>
        <div className="nft_coll_info" style={{backgroundSize: "cover"}}>
            <a href="#"><h4>{EVENTNAME}</h4></a>
        </div>
    </div>
</div>
    </>
    )
}