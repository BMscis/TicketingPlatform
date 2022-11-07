import {API, DataStore, graphqlOperation} from "aws-amplify";
import { createContext, useContext, useState } from "react";
import { ReachContextHook } from "../context/CommonContext";
import * as subs from "../smartseat-ticketing/graphql/subscriptions"
const WebsocketContext = createContext()

export function WebsocketHook(){
    return useContext(WebsocketContext)
}
export default function CREATELISTENER({children}) {
    const {addEvents} = ReachContextHook()
    const cSocket = () => {
        //console.log("GETTING SOCKET")
        API.graphql(
        graphqlOperation(subs.onCreateEVENTS)
    ).subscribe({
        next: ({provider,value}) => addEvents(value.data.onCreateEVENTS),
        error: err => console.warn("++++++++++",err,"++++++++++"),
    })}
    const uSocket = () => {
        //console.log("GETTING SOCKET")
        API.graphql(
        graphqlOperation(subs.onUpdateEVENTS)
    ).subscribe({
        next: ({provider,value}) => addEvents(value.data.onUpdateEVENTS),
        error: err => console.warn("++++++++++",err,"++++++++++"),
    })}
    const [createSocket, setCreateSocket] = useState((()=>{cSocket()}))
    const [updateSocket, setUpdateSocket] = useState((()=>{uSocket()}))
    const value = {
        createSocket,
        updateSocket
    }
    return (
        <>
        <WebsocketContext.Provider value={value}>
            {children}
        </WebsocketContext.Provider>
        </>
    )
}