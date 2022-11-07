import { useState } from "react"

export function imageHandler (){
    const [imageURL, setImage] = useState(null)
    const [img, setImg] = useState(null)
    return {imageURL,setImage,img,setImg}
}
export const imageFileHandler = async (e,setImage,setImg) => {
    if(e.target.files.length == 0) return
    const i = e.target.files[0]
    setImage(URL.createObjectURL(i))
    setImg(i)
    //console.log("IMAGE: ", i)
}