import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import {loadStdlib} from '@reach-sh/stdlib'
import React, { createContext, useContext, useState } from "react";
const stdlib = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"))
const setMode = (mode) => {
    switch (mode) {
        case "WalletConnect":
        stdlib.setWalletFallback(stdlib.walletFallback({
            providerEnv: "TestNet", WalletConnect }));
        break;
        case "MyAlgo":
        stdlib.setWalletFallback(stdlib.walletFallback({
            providerEnv: "TestNet", MyAlgoConnect }));
        break;
    }
}
const uE = [
    {location:"Morrison, CO",contractAddress:"xxxxx",tokenID:0,sold:0,remaining:0,price:1,
    image:"images/upcoming/sub.jpeg",title:"Subtronics",active:false,cloned:false},
    {location:"Columbus, OH",contractAddress:"xxxxx",tokenID:0,sold:0,remaining:0,price:1,
    image:"images/upcoming/Sullivan.jpeg",title:"Sullivan King",active:true,cloned:false},
    {location:"Grand Rapids, MI",contractAddress:"xxxxx",tokenID:0,sold:0,remaining:0,price:1,
    image:"images/upcoming/Bass.jpeg",title:"Bass Country",active:true,cloned:false},
    {location:"Wichita, KS", contractAddress:"xxxxxx",tokenID:0,sold:0,remaining:0,price:1,
    image:"images/upcoming/Kai.jpeg",title:"Kai Wachi",active:true,cloned:false},
    {location:"Chicago, IL", contractAddress:"xxxxxx",tokenID:0,sold:0,remaining:0,price:1,
    image:"images/upcoming/Said.jpeg",title:"Said the Sky",active:true,cloned:false},
    {location:"London", contractAddress:"{\"type\":\"BigNumber\",\"hex\":\"0x06ee0130\"}",tokenID:"116261225",sold:0,remaining:0,price:1,
    image:"images/upcoming/Said.jpeg",title:"PRIDAT",active:true,cloned:false}
]
export const ReachContext = createContext()
export function ReachContextHook(){
    return useContext(ReachContext)
}
export default function CommonContext ({children}){
    const [hasUser, SetUser] = useState(false)
    const [contractAddress, setContractAddress] = useState(undefined)
    const [contract, setContract] = useState(undefined)
    const [upcomingEvent, setCurrentEvent] = useState({events : uE})
    const login = async (mode) => {
        console.log("LOGIN")
        setMode(mode)
        const acc = await stdlib.getDefaultAccount()
        const newUser = {
            "Account":acc,
            "Balance": await stdlib.balanceOf(acc)
        }
        SetUser(newUser)
    }
    const createEvent = async (evn) => {
        console.log("UPCOMING EVENTS: ", upcomingEvent.events)
        const newEvn = upcomingEvent.events.push(evn)
        //setCurrentEvent({events : newEvn})
        console.log("UPC: ", upcomingEvent)
    }
    const value = {
        hasUser,SetUser,
        contractAddress,setContractAddress,
        contract,setContract,login,
        upcomingEvent, createEvent,stdlib
    }
    return (
        <>
        <ReachContext.Provider value={value}>
            {children}
        </ReachContext.Provider>
        </>
    )
}