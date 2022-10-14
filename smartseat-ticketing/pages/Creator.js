import { useRef } from "react"
import { authReach, paramsReachUpdate } from "../context/ReachContext"

export default function Creator() {
  console.log("CREATOR")
    const {currentUser, params} = authReach()
    const changeParams = paramsReachUpdate()
    const contractID = useRef()
    const tokenID = useRef()

    console.log("PARAMS: ",params)
    console.log("CURRENT USER: ",currentUser)
    const handleSubmit = async (e) => {
        e.preventDefault()
        await changeParams(contractID.current.value,tokenID.current.value)
    }
  return (
    <>
    <h1>Creator</h1>
    <form onSubmit={handleSubmit}>
    <input type="text"   placeholder="contractID" ref={contractID}/>
    <input type="number" placeholder="tokenID" ref={tokenID}/>
    <button type="submit">SUBMIT</button>
    </form>    
    </>
  )}