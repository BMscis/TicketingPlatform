import { useEffect, useRef, useState } from "react"
import { ReachContextHook } from "../context/CommonContext"
import { useRouter } from "next/router"
import ArtistDetailCard from "./ArtistDetailCard"
export default function LargeEventsCard({parent}) {
    const router = useRouter()
    const {context} = parent
    const [lImage, setLImage] = useState("")
    const [artistList,setArtistList] = useState(
        parent.state.EVENT.ARTISTS)
    const [eDetails, setLocationImage] = useState(
        parent.state.EVENT.EVENTDETAILS
    )
    const price = parent.state.EVENT.PRICE
    const ENAME = parent.state.EVENT.EVENTNAME
    const ELOCATION = parent.state.EVENT.EVENTLOCATION
    const ETNUMBER = parent.state.EVENT.TICKETNUMBER
    const ETSOLD = parent.state.EVENT.TICKETSOLD
    const tn = useRef()
    function BuyTicket (){
        parent.deploy()
    }
    useEffect(()=>{
        window.addEventListener('popstate', (e) => {
            console.log("POPSTATE")
            parent.props.parent.setState({
                ...parent.props.parent.state,
                view:"CardHolder"
            })
        })
        history.pushState({artistList,eDetails}
            ,"Buyer/EventTicket")
        console.log("USE LARGE EFFECTS: ")
        for(let i=0; i < artistList.length; i++){
            context.
            getCardImage(artistList[i].artistImageName, 
                setArtistList, "artist",artistList,i)
        }
        context.
        getCardImage(eDetails.LocationImage,setLocationImage,"location",eDetails)
    },[])
    return (
        <>
        <div className="col-md-6" style={{backgroundSize: "cover"}}>
            <div className="item_info" style={{backgroundSize: "cover"}}>
                Welcome to {ELOCATION}
                <h2>{ENAME}</h2>
                <p>{eDetails.EventDetails}</p>
                <table>
                    <tbody><tr>
                    {artistList.map(function (arti, i) {
                            return <ArtistDetailCard props={arti} key={i}></ArtistDetailCard>
                        })}
                        <th style={{borderBottom: "none"}}>
                            <img src={eDetails.LocationImg} className="img-fluid img-rounded mb-sm-30" 
                            alt="" height="100" width="100" style={{borderRadius: "72%"}} />
                        </th>
                        <th style={{borderBottom: "none"}}>
                            <h5>{ELOCATION} <br /><span style={{fontSize: "11px",color: "#444"}}>Venue</span></h5>
                        </th>
                    </tr>
                    </tbody></table>
                <table>
                    <tbody><tr>
                        <th>{ETNUMBER - 
                        ETSOLD > 0 
                        ? "Tickets Are Available" : "Sold Out"}</th>
                        <th>{
                        ETNUMBER - 
                        ETSOLD}</th>
                    </tr>
                    </tbody></table>
                <table>
                    <tbody><tr>
                        <th style={{borderBottom: "none"}}> </th>
                    </tr>
                        <tr>
                            <th style={{borderBottom: "none"}}>  <h5>General Admission <br /> ${price}.00 Algos </h5></th>
                            <th style={{borderBottom: "none"}}>  
                            <div name="" id="" className="form-control" style={{backgroundColor:"#444",color: "#fff",border: "none"}}>
                                <input type="number" ref={parent.tickets} placeholder="Tickets Selected" style={{background: "transparent"}}/>
                            </div></th>
                        </tr>
                        <tr>
                            <th style={{borderBottom: "none"}}>  <h5>GA- Lower Level <br /> ${price}.00 Algos </h5></th>
                            <th style={{borderBottom: "none"}}>  
                            <div name="" id="" className="form-control" style={{backgroundColor:"#444",color: "#fff",border: "none"}}>
                            <input type="number" placeholder="Tickets Selected" style={{background: "transparent"}}/>
                            </div></th>
                        </tr>
                    </tbody></table>
                <div className="spacer-40" style={{backgroundSize: "cover"}}></div>
                <button onClick={()=>{BuyTicket()}} className="btn-main btn-lg" style={{backgroundColor: "#18D8B3",marginLeft: "30%"}}>
                    Review Purchase
                </button>
                &nbsp;
            </div>
        </div>
        </>
    )
}