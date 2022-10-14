import React, { Component, useContext} from "react"
import { ReachContext } from "../context/CommonContext"
import EventTicket from "./EventTicket"
import * as backend from "../../build/index.main.mjs"
import {withRouter} from 'next/router'
export default withRouter(class BuyerClass extends Component {
    static contextType = ReachContext
    constructor(){
        super()
        console.log("BUYER CLASS")
        this.state = {
            context:{}
        }
    }
    async deploy(tn){
        try {
            await this.state.context.hasUser.Account.tokenAccept(
                parseInt(this.state.event.tokenID)
            )
            const ctx = JSON.parse(this.state.event.contractAddress)
            this.contract = await this.state.context.hasUser.Account.
            contract(backend,ctx)
        } catch (error) {
            console.log("ERROR", error)
        }
        try {
            if(this.contract.a){
                const res = await this.contract.a.ATTENDEE.buy(
                    [this.state.context.stdlib.parseCurrency(tn)])
                    console.log("RES: ",res)
            }
        } catch (error) {
            console.log("ERROR",error)
        }
    }
    setParams(){
        const context = this.context
        console.log("SET PARAMS: ",context)
        //if(this.state.hasUser == hasUser) return
        this.setState({
        context:context,
        event:this.props.router.query
        })
    }
    componentDidMount(){
        console.log("MOUNT")
        this.setParams()
    }
    componentDidUpdate(){
        console.log("UPDATE")
    }
    render(){
        console.log("PROPS", this.props.router.query)
        return (
            <>
            <EventTicket buyer={this} props={this.props.router.query}></EventTicket>
            </>
        )
    }
}

)