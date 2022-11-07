import { useEffect, useRef, useState } from "react"
import { imageFileHandler, imageHandler } from "./helpers/LoadImage"
export function ArtistContainer({ parent }) {
    const creator = parent
    const [artistCount, setArtistCount] = useState(1)
    const [artistList, setArtistList] = useState([1])
    async function pushArtist() {
        setArtistCount(artistCount + 1)
        setArtistList(prev => [...prev, artistCount])
    }
    return (
        <>
            <div className="beforContainer" style={{
                backgroundSize:"cover",
                marginTop:0,
                borderRadius: "10px"
             }}>
                <div className="col-md-12 text-center" style={{ backgroundSize: "cover" }}>
                    <h1>Artist Lineup</h1>
                </div>
                <div className="bcdiv" style={{ backgroundSize: "cover", width: "100%",
                display: "flex",alignContent: "center",justifyContent: "center",
                alignItems: "flex-end",flexDirection: "column" }}>
                    <button className="btn-main" id="btn" onClick={() => { pushArtist() }}>+</button>
                </div>
                {artistList.map(function (k, i) {
                    return <ArtistCard parent={creator} key={i}></ArtistCard>
                })}
            </div>
        </>
    )
}
function ArtistCard({ parent }) {
    console.log("ARTIST CARD")
    const creator = parent
    const { imageURL, setImage, img, setImg } = imageHandler()
    const nm = useRef()
    async function handle(e) {
        await imageFileHandler(e, setImage, setImg)
    }
    function storeImage() {
    }
    useEffect(()=>{
        if(!img) return
        const artistName = nm.current.value
        const {name} = img
        const artistImage = img
        const artistImageName = 'artist/' + name

        try {
            creator.setState({
                ...creator.state,
                IMAGES:{...creator.state.IMAGES, 
                    artists:[...creator.state.IMAGES.artists,{loc: 'artist',img:img}]},
                EVENT:{...creator.state.EVENT,
                ARTISTS:[
                    ...creator.state.EVENT.ARTISTS,
                    {artistName,artistImageName}],
                }
            })
        } catch (error) {
            console.log("ERROR: ",error)
        }

        },[img])
    return (
        <>
            <div className="bcdiv" style={{
                backgroundSize:"cover",
                padding: "10px",
                borderRadius: "12px",
                borderRight: "1px solid #353e64",
                borderBottom: "1px solid #353e64"
             }}>
                <div>
                    <p>Artist Name</p>
                    <input type="text" ref={nm} name="username" id="form-control"
                        className="form-control" placeholder="Artist"
                    />
                </div>
                <div>
                    <p>Upload Artist Image</p>
                    <input id="form-control" className="form-control" type="file" accept="image/*"
                        onChange={handle} name="submit"
                        style={{ color: "#18D8B3" }} />
                </div>
                <img src={imageURL} className="lazy nft__item_preview"
                    placeholder="Upload Image"
                    style={{
                        left: "30px", top: "20%",
                        height: "50px", margin: "20px", borderRadius: "50%"
                    }}></img>
                    <div className="bcdiv"
                    style={{ backgroundSize: "cover",width:"unset",float:"none"}}>
                        <button onClick={() => { storeImage() }} className="btn-main"
                         id="btn">Save</button>
                    </div>
            </div>
        </>
    )
}