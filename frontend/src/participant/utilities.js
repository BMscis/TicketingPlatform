import {loadStdlib} from '@reach-sh/stdlib';
export const checkBalance = async (acc,t)=>{
    const stdlib =  loadStdlib("ALGO")
    const [ bal, tkBal ] = await stdlib.balancesOf(acc, [null, t]);
    console.log("ACCOUNT: ")
    console.log("ALGO balance is : ", stdlib.formatCurrency(bal,4))
    console.log("JID balance is : ", stdlib.bigNumberToNumber(tkBal))
  }