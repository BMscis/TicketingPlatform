import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import {loadStdlib} from '@reach-sh/stdlib'
import React, { createContext, useContext, useEffect, useState } from "react";
import { getEvents, SendToStore, UpdateEvent } from '../data/event';
import { mkRPC }      from '@reach-sh/rpc-client';
import Timeout        from 'await-timeout';
import { GetImages } from '../storage/store';
import TestAccount from '../calls/fetchTestAccount';
const stdlib = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"))
const opts = {
    host:"localhost",
    port:3000,
    key:"opensesame",
    verify:"0"
  }

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
        //const {rpc, rpcCallbacks} = await mkRPC(opts);
        setMode(mode)
        const acc = await stdlib.getDefaultAccount()
        const newUser = {
            "Account":acc,
            "Balance": await stdlib.balanceOf(acc)
        }
        SetUser(newUser)
    }
    const addEvents = async() =>{
        const evs = await getEvents()
        const ar = []
        console.log("EVENTS: ", evs)
        Object.entries(evs).forEach(ev => {
            ar.push(ev[1])
        })
        setCurrentEvent({events:evs})
    }
    const updateEvent = async(id,val)=> {
        await UpdateEvent(id,val)
    }
    const getCardImage = async(x,y,z,e=0,v=0) => {
        switch (z) {
            case "event":
                const eImg = await GetImages(x)
                y(eImg) 
                break;
            case "artist":
                const aImg = await GetImages(x)
                if(e.length <= 1)y([{...e[v],artistImg: aImg}])
                else y([...e,{...e[v],artistImg: aImg}])
                break
            case "location":
                const lImg = await GetImages(e.LocationImageName)
                y(prev => ({...prev,LocationImg: lImg}))
                break
        }
        
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
        upcomingEvent, createEvent,stdlib,addEvents,
        updateEvent
    }
    useEffect(()=>{
        addEvents()
    },[])
    return (
        <>
        <ReachContext.Provider value={value}>
            {children}
        </ReachContext.Provider>
        </>
    )
}