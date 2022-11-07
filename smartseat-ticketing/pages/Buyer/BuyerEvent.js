import React, { Component } from "react";
import * as backend  from "../../../build/index.main.mjs";
import renderView from "../api/renderView";
import BuyerViews from "./BuyerViews";

export default class BuyerEvent extends Component{
    constructor({parent,id,props}){
        super(props)
        
        this.state = {
            context:parent.props.parent.context,
            view: "EventsCard",
            id:id,
            IMAGE:"",
            stdlib:parent.props.parent.context.stdlib,
            acc:parent.props.parent.context.hasUser.Account,
            EVENT:{
                id:props.id,
                AWSUSER:props.AWSUSER,
                WALLETADDRESS:props.WALLETADDRESS,
                CONTRACTADDRESS:props.CONTRACTADDRESS,
                TOKENID:props.TOKENID,
                EVENTNAME:props.EVENTNAME,
                EVENTLOCATION:props.EVENTLOCATION,
                PRICE:props.PRICE,
                TICKETNUMBER:props.TICKETNUMBER,
                TICKETSOLD:props.TICKETSOLD,
                EVENTIMAGE:props.EVENTIMAGE,
                EVENTDETAILS:props.EVENTDETAILS,
                ARTISTS:props.ARTISTS,
            },
            CONTRACT:{}}
    }
    render(){return renderView(this,BuyerViews)}
}