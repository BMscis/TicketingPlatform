import React, { Component } from "react";
import LargeEventsCard from "../../components/LargeEventsCard";
import { ReachContext } from "../../context/CommonContext";
import * as backend from "../../../build/index.main.mjs";

export default class EventTicket extends Component {
    static contextType = ReachContext
    constructor({ parent, id, props }) {
        super(props)
        this.tickets = React.createRef()
        this.state = {
            context:parent.state.preview.props.parent.props.parent.context,
            view: "EventsCard",
            id: id,
            IMAGE: parent.state.preview.IMAGE,
            stdlib: parent.state.preview.props.parent.props.parent.context.stdlib,
            acc: parent.state.preview.props.parent.props.parent.context.hasUser.Account,
            EVENT: {
                id: parent.state.preview.props.props.id,
                AWSUSER: parent.state.preview.props.props.AWSUSER,
                WALLETADDRESS: parent.state.preview.props.props.WALLETADDRESS,
                CONTRACTADDRESS: parent.state.preview.props.props.CONTRACTADDRESS,
                TOKENID: parent.state.preview.props.props.TOKENID,
                EVENTNAME: parent.state.preview.props.props.EVENTNAME,
                EVENTLOCATION: parent.state.preview.props.props.EVENTLOCATION,
                PRICE: parent.state.preview.props.props.PRICE,
                TICKETNUMBER: parent.state.preview.props.props.TICKETNUMBER,
                TICKETSOLD: parent.state.preview.props.props.TICKETSOLD,
                EVENTIMAGE: parent.state.preview.props.props.EVENTIMAGE,
                EVENTDETAILS: parent.state.preview.props.props.EVENTDETAILS,
                ARTISTS: parent.state.preview.props.props.ARTISTS,
            },
            CONTRACT: {}
        }
    }
    async deploy() {
        const tkn = this.state.stdlib.bigNumberToNumber(
            JSON.parse(
                this.state.EVENT.TOKENID
            ))
        await this.state.acc.tokenAccept(tkn)
        console.log("TOKEN: ", await this.state.acc.tokenAccepted())
        const ctx = JSON.parse(this.state.EVENT.CONTRACTADDRESS)
        this.contract = await this.state.acc.contract(
            backend, ctx)
        if (this.contract.a) {
            const pay = Math.abs(parseInt(this.tickets.current.value) *
                parseInt(this.state.EVENT.PRICE))
            console.log({ pay })
            const cur = this.state.stdlib.parseCurrency(pay)
            console.log({ cur })
            const res = await this.contract.a.ATTENDEE.buy(
                [cur])
            console.log({ res })
            const [didBuy,
                tokenBal,
                tokenSup,
                tokenSold,
                balance
            ] = res
            if (didBuy) {
                this.state.context.updateEvent(
                    this.state.EVENT.id,
                    parseInt(tokenSold)
                )
            }
        }
    }

    render() {
        return (
            <>
                <section aria-label="section" className="mt90 sm-mt-0" style={{ backgroundColor: "black", backgroundSize: "cover" }}>
                    <div className="container" style={{ backgroundSize: "cover" }}>
                        <div className="row" style={{ backgroundSize: "cover" }}>
                            <div className="col-md-6 text-center" style={{ backgroundSize: "cover" }}>
                                <img src={this.state.IMAGE} className="img-fluid img-rounded mb-sm-30" alt="" />
                            </div>
                            <LargeEventsCard parent={this}></LargeEventsCard>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}