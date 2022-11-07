import { Component } from "react";
import renderView from "../api/renderView";
import HolderView from "./HolderView";

export default class HolderClass extends Component{
    constructor({parent}){
        super(parent)
        this.state = {
            view:"CardHolder",
        }
    }
    render(){
        return renderView(this,HolderView)
    }
}