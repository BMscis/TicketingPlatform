import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from '../../../build/index.main.mjs'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { checkBalance } from './utilities.js';
import { contract, token } from './stores/info.js';

const stdlib =  loadStdlib("ALGO")
const ticketPrice = stdlib.parseCurrency(1);
stdlib.setWalletFallback(stdlib.walletFallback({
    providerEnv: "TestNet", MyAlgoConnect }));


export class Creator {
    constructor(){}
    async deploy(){
        console.log("DEPLOY CONTRACT")
        this.account = await stdlib.getDefaultAccount();
        this.contract = this.account.contract(backend)
        this.contract.p.CREATOR(this)
    }
    getParams (){
        console.log("GET PARAMS")
        return {
            price : ticketPrice,
            tickets : 2,
            eventName : "UBARN",
            eventSymbol : "POTUS",
            url:"https://asdf.com",
            metadata:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            evenTime:100,
            reserved:1
            }
    }
    async notify (ETOKEN,bl,sp) {
        console.log("NOTIFY")
        token.set(ETOKEN)
        this.token = ETOKEN
        await this.account.tokenAccept(ETOKEN)
        console.log("TOKEN: ", stdlib.bigNumberToNumber(ETOKEN))
        console.log("BALANCE: ", stdlib.bigNumberToNumber(bl))
        console.log("SUPPLY: ", stdlib.bigNumberToNumber(sp))
    }
    ready (ETOKEN,ct){
        contract.set(ct)
        console.log("DONE: ",JSON.stringify(ct))
        checkBalance(this.account,this.token)
    }
    soldOut (ET,CT) {
        console.log("SOLD OUT")
        checkBalance(this.account,this.token)
    }
    end () {
        console.log("END.............")
    }
}