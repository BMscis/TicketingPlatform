export default function LargeCard({props}){
    const {source,title} = props
    return (
        <>
        <div className="col-lg-4 col-md-6 mb-sm-30">
        <img className="lazy" src={source} alt="" height="195" style={{width: "100%",borderRadius: "29px 29px 0px 0px"}}/>
        <div className="feature-box f-boxed style-3" style={{marginBottom: "24px",borderRadius: "0px 0px 29px 29px"}}>
        <div className="text" style={{textAlign: "center"}}>
        <h4 className="wow fadeInUp">{title}</h4>

        </div>
        </div>
        </div>
        </>
    )
}