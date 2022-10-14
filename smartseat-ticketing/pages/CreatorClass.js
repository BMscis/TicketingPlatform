import React, { Component, useContext} from "react"
import * as backend from "../../build/index.main.mjs"
import { ReachContext } from "../context/CommonContext.js"
import ListTickets from "./ListTickets.js"

export const CreatorContext = React.createContext()
export function GetCreator(){
    return useContext(CreatorContext)
}
export default class CreatorClass extends Component {
    static contextType = ReachContext
    constructor(){
        super()
        console.log("CREATOR CLASS: ")
        this.state = {
            context:{}
        }
    }
    setParams(){
        const context = this.context
        console.log("SET PARAMS: ",context)
        //if(this.state.hasUser == hasUser) return
        this.setState({
        context:context,
        event:{
            price : 0,
            tickets : 0,
            eventName : "",
            eventSymbol : "",
            url:"",
            metadata:"",
            evenTime:0,
            reserved:0
        }
        })
    }
    async deploy(nm,tn,ts,ed,rs,lc,tp) {
        console.log("DEPLOY")
        this.event ={
            price : this.state.context.stdlib.parseCurrency(tp),
            tickets : tn,
            eventName : nm,
            eventSymbol : ts,
            url:"image",
            metadata:lc,
            evenTime:100,
            reserved:rs
        }
        try {
            this.contract = await this.state.context.hasUser.Account.contract(backend)
        } catch (error) {
            console.log("ERROR",error)
        }
        try {
            if(this.contract.p)this.contract.p.CREATOR(this)
            console.log("CONTRACT: ", this.contract)   
        } catch (error) {
            console.log("Error",error)
        }
    }
    async getParams() {
        console.log("GET PARAMS: ")
    return this.event
    }
    async notify (ETOKEN,bl,sp) {
        console.log("NOTIFY")
        this.balance = this.state.context.stdlib.bigNumberToNumber(bl)
        this.supply = this.state.context.stdlib.bigNumberToNumber(sp)
        await this.state.context.hasUser.Account.tokenAccept(ETOKEN)
        console.log("TOKEN: ",   this.state.context.stdlib.bigNumberToNumber(ETOKEN))
        console.log("BALANCE: ", this.state.context.stdlib.bigNumberToNumber(bl))
        console.log("SUPPLY: ",  this.state.context.stdlib.bigNumberToNumber(sp))
    }
    ready (ETOKEN,ct){
        console.log("READY")
        console.log("DONE: ",JSON.stringify(ct))
        const cEvent = {
            location:this.event.metadata,
            contractAddress:JSON.stringify(ct),
            tokenID:this.state.context.stdlib.bigNumberToNumber(ETOKEN),
            sold:this.balance,
            remaining: this.supply,
            image:"images/upcoming/Sullivan.jpeg",
            title:this.event.eventName,
            active:true,
            cloned:false,
            price:this.event.price
        }
        this.state.context.createEvent(cEvent)
        this.state.context.setContractAddress(JSON.stringify(ct))
    }
    soldOut (ET,CT) {
        console.log("SOLD OUT")
        checkBalance(this.account,this.token)
    }
    end () {
        console.log("END.............")
    }
    componentDidMount(){
        console.log("COMPONENT MOUNT")
        this.setParams()
    }
    componentDidUpdate(){
        if(this.state.context.contractAddress != 
            this.context.contractAddress ||
            this.state.context.upcomingEvent != 
            this.context.upcomingEvent){
                console.log("COMPONENT UPDATE")
                this.setParams()
            }
    }
    render(){
        console.log("RENDER")
        return (
        <>
        <ListTickets props={this}></ListTickets>
        </>
        )
    }
}
