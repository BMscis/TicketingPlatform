import { Component } from "react";
import { ReachContext } from "../../context/CommonContext";
import renderView from "../api/renderView";
import BuyerEvent from "../Buyer/BuyerEvent";
import HolderClass from "../holder/HolderClass";
import ParentView from "./parentView";

export default class ParentClass extends Component{
    static contextType = ReachContext
    constructor({props}){
        super(props)
        this.state = {
            view:"Home",
        }
    }
    setParams(){
        try {
            this.setState({
                ...this.state,
                view:"Wrapper",
                ContentView:HolderClass,
                USER:{...this.state.EVENT,
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
    render(){
        return renderView(this,ParentView)
    }
}