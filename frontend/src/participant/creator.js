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
    async deploy(pr,tc,en,es,ur,me,ev,re){
        this.event = {
            price : stdlib.parseCurrency(pr),
            tickets : tc,
            eventName : en,
            eventSymbol : es,
            url:ur,
            metadata:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            evenTime:ev,
            reserved:re
            }
        console.log("DEPLOY CONTRACT")
        this.account = await stdlib.getDefaultAccount();
        this.contract = this.account.contract(backend)
        this.contract.p.CREATOR(this)
    }
    getParams (){
        console.log("GET PARAMS")
        return this.event
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