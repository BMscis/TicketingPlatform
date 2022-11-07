import { useEffect, useRef, useState } from "react"
import { imageFileHandler, imageHandler } from "./helpers/LoadImage"
export function EventDetails({parent}) {
    const creator = parent
    const { imageURL, setImage, img, setImg } = imageHandler()
    const {EventDetails, EventLocation, LocationImageName} = 
    creator.state.EVENT.EVENTDETAILS
    async function handle(e) {
        await imageFileHandler(e, setImage, setImg)
    }
    async function storeEvent(){

    }
    useEffect(()=>{
        console.log("eventdetails")
        if(!img) return
        parent.setState({
            ...parent.state,
            IMAGES:{...parent.state.IMAGES, 
                location:{loc: 'location',img:img}},
            EVENT:{...parent.state.EVENT,
            EVENTDETAILS:{
                ...parent.state.EVENT.EVENTDETAILS,
                LocationImageName:'location/' + img.name,
            },
            }
        })
    },[img])
    return (
        <>
            <div className="beforContainer" style={{
                backgroundSize:"cover",marginTop:0,borderRadius: "10px"
            }}>
                <div className="col-md-12 text-center" style={{ backgroundSize: "cover" }}>
                    <h1>Event Details</h1>
                </div>
                <div className="bcdiv" style={{
                    backgroundSize: "cover", width: "60%",
                }}>
                    <textarea type="text" ref={EventDetails} id="form-control"
                        className="form-control" placeholder="Event description"></textarea>
                </div>
                <div className="bcdiv" style={{ float: "right", backgroundSize: "cover" }}>
                    <p>Upload Location Image</p>
                    <input id="form-control" className="form-control" type="file" accept="image/*"
                        onChange={handle} name="submit" style={{ color: "#18D8B3" }} />
                    <img src={imageURL} className="lazy nft__item_preview"
                        placeholder="Location Image"
                        style={{
                            left: "30px", top: "20%",
                            height: "96px", margin: "20px", borderRadius: "50%"
                        }}></img>
                </div>

                <div className="bcdiv" style={{
                    backgroundSize: "cover", width: "60%",
                }}>
                    <textarea type="text" ref={EventLocation} id="form-control"
                        className="form-control" placeholder="Location Description"></textarea>
                </div>
                <div className="bcdiv"
                    style={{ backgroundSize: "cover", width: "unset", float: "none" }}>
                    <button onClick={() => { storeEvent() }} className="btn-main"
                        id="btn">Save</button>
                </div>
            </div>
        </>
    )
}
