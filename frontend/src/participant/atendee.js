import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from '../../../build/index.main.mjs'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { checkBalance } from './utilities.js';
import { redeem } from './stores/info.js';
const stdlib =  loadStdlib("ALGO")
const ticketPrice = stdlib.parseCurrency(1);
stdlib.setWalletFallback(stdlib.walletFallback({
    providerEnv: "TestNet", MyAlgoConnect }));

export class Atendee {
    constructor(ctx,token){
        this.CtxInfo = ctx
        this.token = token
    }
    async deploy(){
        this.account = await stdlib.getDefaultAccount();
        this.contract = this.account.contract(backend,JSON.parse(this.CtxInfo))
        
    }
    async buyTicket (){
      await this.deploy()
        try {
            try {
              await this.account.tokenAccept(this.token)
              const [res,bal,sup,sold,alg] = await this.contract.a.ATTENDEE.buy(ticketPrice)
              console.log("RESPONSE: ", res)
              console.log("BALANCE: ", stdlib.bigNumberToNumber(bal))
              console.log("SUPPLY: ", stdlib.bigNumberToNumber(sup))
              console.log("SOLD: ", stdlib.bigNumberToNumber(sold))
              console.log("ALGO: ", stdlib.bigNumberToNumber(alg))
              await checkBalance(this.account,this.token)
              if(res){
                console.log("Setting redeem")
                redeem.set(true)
              }
            } catch (error) {
              console.log("LOG: E, ", error)
            }
          } catch (error) {
            console.log("Sorry, ")
            console.log(error)
            console.log("We are full")
          }
    }
    async redeem (){
        try {
            try {
              const [res,bal,sup,sold,alg] = await this.contract.a.ATTENDEE.redeem(this.token)
              console.log("RESPONSE: ", res)
              console.log("BALANCE: ", stdlib.bigNumberToNumber(bal))
              console.log("SUPPLY: ", stdlib.bigNumberToNumber(sup))
              console.log("SOLD: ", stdlib.bigNumberToNumber(sold))
              console.log("ALGO: ", stdlib.bigNumberToNumber(alg))
              await checkBalance(this.account,this.token)
              return true
            } catch (error) {
              console.log("LOG: E, ", error)
            }
          } catch (error) {
            console.log("Sorry, ")
            console.log(error)
            console.log("We are full")
          }
    }
}