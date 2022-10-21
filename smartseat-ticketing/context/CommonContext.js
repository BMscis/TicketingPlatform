import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import {loadStdlib} from '@reach-sh/stdlib'
import React, { createContext, useContext, useEffect, useState } from "react";
import { getEvents, SendToStore } from '../data/event';
import { GetImages } from '../storage/store';
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
    {EVENTLOCATION:"Morrison, CO",CONTRACTADDRESS:"xxxxx",TOKENID:0,TICKETSOLD:0,TICKETNUMBER:0,PRICE:1,
    EVENTIMAGE:"images/upcoming/sub.jpeg",EVENTNAME:"Subtronics",active:false,cloned:false},
    {EVENTLOCATION:"Columbus, OH",CONTRACTADDRESS:"xxxxx",TOKENID:0,TICKETSOLD:0,TICKETNUMBER:0,PRICE:1,
    EVENTIMAGE:"images/upcoming/Sullivan.jpeg",EVENTNAME:"Sullivan King",active:true,cloned:false},
    {EVENTLOCATION:"Grand Rapids, MI",CONTRACTADDRESS:"xxxxx",TOKENID:0,TICKETSOLD:0,TICKETNUMBER:0,PRICE:1,
    EVENTIMAGE:"images/upcoming/Bass.jpeg",EVENTNAME:"Bass Country",active:true,cloned:false},
    {EVENTLOCATION:"Wichita, KS", CONTRACTADDRESS:"xxxxxx",TOKENID:0,TICKETSOLD:0,TICKETNUMBER:0,PRICE:1,
    EVENTIMAGE:"images/upcoming/Kai.jpeg",EVENTNAME:"Kai Wachi",active:true,cloned:false},
    {EVENTLOCATION:"Chicago, IL", CONTRACTADDRESS:"xxxxxx",TOKENID:0,TICKETSOLD:0,TICKETNUMBER:0,PRICE:1,
    EVENTIMAGE:"images/upcoming/Said.jpeg",EVENTNAME:"Said the Sky",active:true,cloned:false},
    {EVENTLOCATION:"London", CONTRACTADDRESS:"{\"type\":\"BigNumber\",\"hex\":\"0x06ee0130\"}",TOKENID:"116261225",TICKETSOLD:0,TICKETNUMBER:0,PRICE:1,
    EVENTIMAGE:"images/upcoming/Said.jpeg",EVENTNAME:"PRIDAT",active:true,cloned:false}
]
export const ReachContext = createContext()
export function ReachContextHook(){
    return useContext(ReachContext)
}
export default function CommonContext ({children}){
    const [hasUser, SetUser] = useState(false)
    const [cardImage, SetCardImage] = useState(null)
    const [awsUser, SetAwsUser] = useState(false)
    const [CONTRACTADDRESS, setContractAddress] = useState(undefined)
    const [contract, setContract] = useState(undefined)
    const [upcomingEvent, setCurrentEvent] = useState({events:[]})

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
    const addEvents = async() =>{
        console.log("GETTING FROM DB")
        const evs = await getEvents()
        const ar = []
        console.log("EVENTS: ", evs)
        Object.entries(evs).forEach(ev => {
            ar.push(ev[1])
        })
        console.log("ARRAY: ", ar)
        setCurrentEvent({events:evs})
    }
    const getCardImage = async(x) => {
        const img = await GetImages(x)
        SetCardImage(img)
    }
    const createEvent = async (evn) => {

        await SendToStore(evn)

    }
    const value = {
        cardImage, getCardImage,
        hasUser,SetUser,
        awsUser,SetAwsUser,
        CONTRACTADDRESS,setContractAddress,
        contract,setContract,login,
        upcomingEvent, createEvent,stdlib,addEvents
    }
    useEffect(async ()=>{
        await addEvents()
    },[])
    return (
        <>
        <ReachContext.Provider value={value}>
            {children}
        </ReachContext.Provider>
        </>
    )
}