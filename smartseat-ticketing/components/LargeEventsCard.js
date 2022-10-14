import { useRef } from "react"

export default function LargeEventsCard({buyer,props}) {
    console.log("LARGE EVENTS CARDS: ", props)
    console.log("LARGE EVENTS CARDS: ", buyer)
    const tn = useRef()
    return (
        <>
        <div className="col-md-6" style={{backgroundSize: "cover"}}>
            <div className="item_info" style={{backgroundSize: "cover"}}>
                Welcome to Cyclops Rocks
                <h2>Subtronics-Red Rocks</h2>
                <p>Currently booking flights for April 21 for a late 4/20 celebration with the cyclops king, Subtronics, and his insanely stacked lineup he’s bringing along. Not only is he bringing along legends Rusko and Yheti, but we’re also getting 2 absolutely stacked B2B’s with G-Space B2B Tiedye Ky and Zingara B2B AUSTERIA.</p>
                <table>
                    <tbody><tr>
                        <th style={{borderBottom: "none"}}>
                            <img src="images/ticketSub.jpeg" className="img-fluid img-rounded mb-sm-30" alt="" height="100" width="100" style={{borderRadius: "72%"}} />
                        </th>
                        <th style={{borderBottom: "none"}}>
                            <h5>Subtronics <br /><span style={{fontSize: "11px",color: "#444"}}>Artists</span></h5>
                        </th>
                        <th style={{borderBottom: "none"}}>
                            <img src="images/ticketRock.jpg" className="img-fluid img-rounded mb-sm-30" alt="" height="100" width="100" style={{borderRadius: "72%"}} />
                        </th>
                        <th style={{borderBottom: "none"}}>
                            <h5>Red Rocks <br /><span style={{fontSize: "11px",color: "#444"}}>Venue</span></h5>
                        </th>
                    </tr>

                    </tbody></table>
                <table>
                    <tbody><tr>
                        <th>Ticket Available</th>
                    </tr>
                    </tbody></table>
                <table>
                    <tbody><tr>
                        <th style={{borderBottom: "none"}}> </th>
                    </tr>
                        <tr>
                            <th style={{borderBottom: "none"}}>  <h5>General Admission <br /> ${props.price}.00 Algos </h5></th>
                            <th style={{borderBottom: "none"}}>  
                            <div name="" id="" className="form-control" style={{backgroundColor:"#444",color: "#fff",border: "none"}}>
                                <input type="number" ref={tn} placeholder="Tickets Selected" style={{background: "transparent"}}/>
                            </div></th>
                        </tr>
                        <tr>
                            <th style={{borderBottom: "none"}}>  <h5>GA- Lower Level <br /> ${props.price}.00 Algos </h5></th>
                            <th style={{borderBottom: "none"}}>  
                            <div name="" id="" className="form-control" style={{backgroundColor:"#444",color: "#fff",border: "none"}}>
                            <input type="number" placeholder="Tickets Selected" style={{background: "transparent"}}/>
                            </div></th>
                        </tr>
                    </tbody></table>
                <div className="spacer-40" style={{backgroundSize: "cover"}}></div>
                <button onClick={()=>{buyer.deploy(tn.current.value)}} className="btn-main btn-lg" style={{backgroundColor: "#18D8B3",marginLeft: "30%"}}>
                    Review Purchase
                </button>
                &nbsp;
            </div>
        </div>
        </>
    )
}