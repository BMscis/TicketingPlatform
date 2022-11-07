import React, { useContext, useState } from "react";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import {loadStdlib} from '@reach-sh/stdlib'
const stdlib = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"))
export const ReachAuthContext = React.createContext()
const ReachParamsUpdate = React.createContext()

export function authReach(){
    return useContext(ReachAuthContext)
}
export function paramsReachUpdate(){
    return useContext(ReachParamsUpdate)
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
export default function ReachAuthContextProvider({children}){
    //console.log("REACHCONTEXTPROVIDER")
    const [currentUser, setCurrentUser] = useState()
    const [params, setParams] = useState({contractID:"",tokenID:0})
    const [hasUser, setUser] = useState(false)
    const login = async (mode) =>  {
        //console.log("LOGIN IN")
        setMode(mode)

        const acc = await stdlib.getDefaultAccount()
        const newUser = {
            "Account":acc,
            "Balance":await stdlib.balanceOf(acc)
        }
        //console.log("NEW USER: ", newUser)
        setCurrentUser(newUser)
        setUser(true)
    }
    const changeParams = (a,j) => {
        //console.log("CHANGEPARAMS")
        setParams({contractID:a,tokenID:j})
    }
      const value = {
        currentUser,
        login,
        hasUser,
        params,
        stdlib,
        changeParams
      }
      return (
        <>
        <ReachAuthContext.Provider value={value}>
            <ReachParamsUpdate.Provider value={changeParams}>
                {children}
            </ReachParamsUpdate.Provider>
        </ReachAuthContext.Provider>
        </>
      )
}