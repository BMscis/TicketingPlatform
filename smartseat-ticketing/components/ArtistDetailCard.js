export default function ArtistDetailCard ({props}){
    const {artistImg,artistName} = props
    return (
        <>
        <th style={{borderBottom: "none"}}>
        <img src={artistImg} className="img-fluid img-rounded mb-sm-30" alt="" 
        height="50" width="80" style={{borderRadius: "72%"}} />
        </th>
        <th style={{borderBottom: "none"}}>
        <h5>{artistName} <br /><span style={{fontSize: "11px",color: "#444"}}>Artists</span></h5>
        </th>
        </>
    )
}