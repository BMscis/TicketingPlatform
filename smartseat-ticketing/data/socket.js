import {API, DataStore, graphqlOperation} from "aws-amplify";
import { createContext, useContext, useState } from "react";
import { ReachContextHook } from "../context/CommonContext";
import * as subs from "../smartseat-ticketing/graphql/subscriptions"
const WebsocketContext = createContext()

export function WebsocketHook(){
    return useContext(WebsocketContext)
}
export default function CREATELISTENER({children}) {
    console.log("CREATE LISTENER")
    const {addEvents} = ReachContextHook()
    const socket = () => {
        console.log("GETTING SOCKET")
        API.graphql(
        graphqlOperation(subs.onCreateEVENTS)
    ).subscribe({
        next: ({provider,value}) => addEvents(value.data.onCreateEVENTS),
        error: err => console.warn("++++++++++",err,"++++++++++"),
    })}
    const [createSocket, setCreateSocket] = useState((()=>{socket()}))

    return (
        <>
        <WebsocketContext.Provider value={createSocket}>
            {children}
        </WebsocketContext.Provider>
        </>
    )
}