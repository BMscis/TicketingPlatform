
export default function WalletCard({props}){
    const {image, title,span,description,active,login} = props
    const classType = active ? "col-lg-3 mb30 active" : "col-lg-3 mb30"
    //console.log("TITLE: ", title)
    return (
        <>
        <div className={classType}>
        <button onClick={()=>{login(title)}} className="box-url" disabled={!active}>
        <div className="box-url-label">{span}</div>
        <img src={image} alt="" className="mb20"/>
        <h4>{title}</h4>
        <p>{description}</p>
        </button>
        </div>
        </>
    )

}