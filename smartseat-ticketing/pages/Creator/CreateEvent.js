import React, { Component } from "react";
import  * as backend  from "../../../build/index.main.mjs";
import { ReachContext } from "../../context/CommonContext";
import { SendToS3 } from "../../storage/store";
import renderView from "../api/renderView";
import CreatorViews from "./CreatorViews";

export default class CreateEvent extends Component{
    static contextType = ReachContext
    constructor({parent,props}){
        super(props)
        this.state = {
            view: "ListTickets",
            CREATE:{
                EVENTSYMBOL:React.createRef(),
                EVENTDATE:"",
                RESERVED:React.createRef(),
                EVENTIMAGE:""
            },
            EVENT:{
                AWSUSER: {},
                WALLETADDRESS: "",
                CONTRACTADDRESS: "",
                TOKENID: "",
                EVENTNAME: React.createRef(),
                EVENTLOCATION: React.createRef(),
                PRICE: React.createRef(),
                TICKETNUMBER: React.createRef(),
                TICKETSOLD: 0,
                EVENTIMAGE: "",
                EVENTDETAILS: {
                    EventDetails:React.createRef(),
                    EventLocation:React.createRef(),
                    LocationImageName:"",
                },
                ARTISTS: [],
            },
            IMAGES:{
                location:{},
                artists:[]
            },
            OBJ:{},
            CONTRACT:{}}
    }
    async deploy (){
        try {
            this.sendToAWS()
            this.contract = await this.context.
            hasUser.Account.contract(backend)
            console.log(this.contract)
            this.OBJ = {
                price:this.context.stdlib.parseCurrency(
                    this.state.EVENT.PRICE.current.value),
                tickets:parseInt(this.state.EVENT.TICKETNUMBER.current.value),
                eventName:this.state.EVENT.EVENTNAME.current.value,
                eventSymbol:this.state.CREATE.EVENTSYMBOL.current.value,
                url:this.state.EVENT.EVENTIMAGE,
                metadata:this.state.EVENT.EVENTIMAGE,
                evenTime:100,
                reserved:parseInt(this.state.CREATE.RESERVED.current.value)}
            this.setState({
                ...this.state,
                CONTRACT: this.contract,
            })
        if(this.contract.p)this.contract.p.CREATOR(this)
        } catch (error) {
            console.log("CONTRACT ERROR: ")
            console.log(error)
        }
    }
    async sendToAWS(){
        try {
            await SendToS3(
                this.state.IMAGES.location.
                img,
                "location"
            )
            this.state.IMAGES.artists
            .forEach(async (e) => {
                await SendToS3(e.img,"artist")
            });
            await SendToS3(
                this.state.CREATE.EVENTIMAGE,
                "event"
            )
        } catch (error) {
            console.log("SEND TO AWS ERROR:")
            console.log(error)
        }
    }
    async getParams() {
            return this.OBJ
    }
    async notify(ctx,ETOKEN,sup,bal){
        const balance = this.context.stdlib.
        bigNumberToNumber(bal)
        const supply = this.context.stdlib.
        bigNumberToNumber(sup)
        try {
            await this.context.hasUser.Account.
            tokenAccept(ETOKEN)
        } catch (error) {
            console.log("ACCEPT TOKEN ERROR")
            console.log(error)
        }
        this.setState({
            ...this.state,
            EVENT:{...this.state.EVENT,
            TOKENID:JSON.stringify(ETOKEN),
            CONTRACTADDRESS:JSON.stringify(ctx),
            TICKETSOLD: supply - balance}
        })
    }
    async ready(){
        try {
            const ev = this.state.EVENT
            const el = {
                EventDetails:ev.EVENTDETAILS.EventDetails.current.value,
                EventLocation:ev.EVENTDETAILS.EventLocation.current.value,
                LocationImageName:ev.EVENTDETAILS.LocationImageName,
            }
            const event = {
                AWSUSER:ev.AWSUSER,
                WALLETADDRESS:ev.WALLETADDRESS,
                CONTRACTADDRESS:ev.CONTRACTADDRESS,
                TOKENID:ev.TOKENID,
                EVENTNAME:ev.EVENTNAME.current.value,
                EVENTLOCATION:ev.EVENTLOCATION.current.value,
                PRICE:ev.PRICE.current.value,
                TICKETNUMBER:ev.TICKETNUMBER.current.value,
                TICKETSOLD:ev.TICKETSOLD,
                EVENTIMAGE:ev.EVENTIMAGE,
                EVENTDETAILS:el,
                ARTISTS:ev.ARTISTS}
            this.context.createEvent(
                event
            )
        } catch (error) {
            console.log("ERROR: ",error)
        }
    }
    setParams(){
        try {
            this.setState({
                ...this.state,
                EVENT:{...this.state.EVENT,
                AWSUSER:this.context.awsUser.username,
                WALLETADDRESS:this.context.hasUser.Account.
                networkAccount.addr}
            })
        } catch (error) {
            console.log("SET PARAMS ERROR: ")
            console.log(error)
        }
    }
    componentDidMount(){
        console.log("Mounting")
        if(this.context)this.setParams()
    }
    componentDidUpdate(){
        console.log(this)
    }
    render(){return renderView(this, CreatorViews)}
}