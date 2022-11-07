import { useRouter } from "next/router"
import {  useEffect, useRef, useState } from "react"
import { ArtistContainer } from "../../components/ArtistCard"
import { EventDetails } from "../../components/EventDetails"
import { imageFileHandler, imageHandler } from "../../components/helpers/LoadImage"
export default function ListTickets({ parent }) {
    const creator = parent
    const { imageURL, setImage, img, setImg } = imageHandler()
    const {EVENTSYMBOL,RESERVED} = creator.state.CREATE
    const {EVENTNAME,EVENTLOCATION,PRICE,TICKETNUMBER,
        EVENTIMAGE,EVENTDETAILS} = creator.state.EVENT
    const ed = useRef()
    async function handle (e) {
        await imageFileHandler(e, setImage, setImg)
    }
    const createEvent = async () => {

        await creator.deploy()
    }
    useEffect(()=> {
        if(!img) return
        const imageName = "event/" + img.name
        creator.setState({
            ...creator.state,
            CREATE:{...creator.state.CREATE,
            EVENTIMAGE:img},
            
            EVENT:{...creator.state.EVENT,
            EVENTIMAGE:imageName,}
        })
    },[img])
    return (
        <>
            <section id="subheader" className="text-light" style={{ backgroundColor: "black", backgroundSize: "cover" }}>
                <div className="center-y relative text-center" style={{ backgroundSize: "cover" }}>
                    <div className="container" style={{ backgroundSize: "cover" }}>
                        <div className="row" style={{ backgroundSize: "cover" }}>

                            <div className="col-md-12 text-center" style={{ backgroundSize: "cover" }}>
                                <h1>List Tickets</h1>
                            </div>
                            <div className="clearfix" style={{ backgroundSize: "cover" }}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ backgroundColor: "black", backgroundSize: "cover" }}>
                <div className="beforContainer" style={{ backgroundSize: "cover" }}>
                    <div className="bcdiv" style={{ backgroundSize: "cover" }}>
                        <p>Name of event:</p>
                        <input type="text" ref={EVENTNAME} name="username" id="form-control"
                            className="form-control" placeholder="Triple Rainbow" />
                    </div>
                    <div className="bcdiv" style={{ backgroundSize: "cover" }}>
                        <p>How many tickets?</p>
                        <input type="text" ref={TICKETNUMBER} name="username" id="form-control"
                            className="form-control" placeholder="1500" />
                    </div>
                    <div className="bcdiv" style={{ backgroundSize: "cover" }}>
                        <p>Ticket symbol?</p>
                        <input type="text" ref={EVENTSYMBOL} name="username" id="form-control"
                            className="form-control" placeholder="ABC" />
                    </div>
                    <div className="bcdiv" style={{ backgroundSize: "cover" }}>
                        <p>Event Date?</p>
                        <input type="date" ref={ed} name="username" id="form-control"
                            className="form-control" />
                    </div>
                    <div className="bcdiv" style={{ backgroundSize: "cover" }}>
                        <p>Reserved Tickets</p>
                        <input type="number" ref={RESERVED} name="username" id="form-control"
                            className="form-control" placeholder="0" />
                    </div>
                    <div className="bcdiv" style={{ backgroundSize: "cover" }}>
                        <p>Location</p>
                        <input type="text" ref={EVENTLOCATION} name="username" id="form-control"
                            className="form-control" placeholder="CA, California" />
                    </div>
                    <div className="bcdiv" style={{ backgroundSize: "cover" }}>
                        <p>Ticket Price</p>
                        <input type="number" ref={PRICE} name="username" id="form-control"
                            className="form-control" placeholder="ALGO" />
                    </div>
                    <div className="bcdiv" style={{ 
                        backgroundSize: "cover" ,display: "flex",justifyContent: "center",
                        alignItems: "center"}}>
                    <img src={imageURL} className="lazy nft__item_preview" placeholder="Upload Image"
                        style={{ float:"left",height:"156px",margin: "20px", borderRadius: "10%" }}></img>
                    </div>
                    <div className="bcdiv" style={{ float:"right",backgroundSize: "cover" }}>
                        <p>Upload Event Promo Image</p>
                        <input id="form-control" className="form-control" type="file" accept="image/*" 
                        onChange={handle} name="submit" style={{ color: "#18D8B3" }} />
                    </div>

                </div>
                <ArtistContainer parent={creator}></ArtistContainer>
                <EventDetails parent={creator}></EventDetails>
                <div className="container" style={{ backgroundSize: "cover" }}>
                    <div className="row" style={{ backgroundSize: "cover" }}>
                        <div className="col text-center" style={{ backgroundSize: "cover" }}>
                        </div>
                    </div>
                    <div className="row sequence" style={{ backgroundSize: "cover" }}>
                        <button className="btn-main" onClick={() => { createEvent() }} style={{ width: "70%", margin: "auto", backgroundColor: "#18D8B3" }}>List Tickets</button>
                    </div>
                </div>
            </section>
        </>
    )
}