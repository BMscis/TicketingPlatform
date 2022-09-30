import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);
let done = false
let part = 0
const startingBalance = stdlib.parseCurrency(100);
const ticketPrice = stdlib.parseCurrency(1);

const accCREATOR = await stdlib.newTestAccount(startingBalance);
const [acc1,acc2,acc3,acc4,acc5,acc6] = await stdlib.newTestAccounts(5, startingBalance)
const parts = [acc1,acc2,acc3,acc4,acc5,acc6]
console.log('Hello, CREATOR !');

console.log('Launching...');
const ctcCREATOR = accCREATOR.contract(backend);

const checkBalance = async (acc,t)=>{
  const [ bal, tkBal ] = await stdlib.balancesOf(acc, [null, t]);
  console.log("ACCOUNT: ")
  console.log("ALGO balance is : ", stdlib.formatCurrency(bal,4))
  console.log("JID balance is : ", stdlib.bigNumberToNumber(tkBal))
}

const newMember = async (ETK,ct) => {
  const buyTicket = async (i,ax) => {
    try {
      try {
        await ax.tokenAccept(ETK)
        const ctx = ax.contract(backend,ct)
        console.log(`============================ ${i} ============================`)
        const [res,bal,sup,sold,alg] = await ctx.a.ATTENDEE.buy(ticketPrice)
        console.log("RESPONSE: ", res)
        console.log("BALANCE: ", stdlib.bigNumberToNumber(bal))
        console.log("SUPPLY: ", stdlib.bigNumberToNumber(sup))
        console.log("SOLD: ", stdlib.bigNumberToNumber(sold))
        console.log("ALGO: ", stdlib.formatCurrency(alg))
        await checkBalance(ax,ETK)
      } catch (error) {
        console.log("LOG: E, ", error)
      }
    } catch (error) {
      console.log("Sorry, ")
      console.log(error)
      console.log("We are full")
    }
  }
  try {
    for (let index = 0; index < 5; index++) {
      await buyTicket(index,parts[index])
      //await stdlib.wait(1);
    }
  } catch (error) {
    console.warn = () => {};
  }

  console.log("DONEEEEEEEEEEEEEEEEE")
  return
}
const ticket = async (ETK,ct) => {
  const checkTicket = async (i,ax) => {
    try {
      try {
        const ctx = ax.contract(backend,ct)
        console.log(`============================ ${i} ============================`)
        const [res,bal,sup,sold,alg] = await ctx.a.ATTENDEE.redeem(ETK)
        console.log("RESPONSE: ", res)
        console.log("BALANCE: ", stdlib.bigNumberToNumber(bal))
        console.log("SUPPLY: ", stdlib.bigNumberToNumber(sup))
        console.log("SOLD: ", stdlib.bigNumberToNumber(sold))
        console.log("ALGO: ", stdlib.formatCurrency(alg))
        await checkBalance(ax,ETK)
      } catch (error) {
        console.log("LOG: E, ", error)
      }
    } catch (error) {
      console.log("Sorry, ")
      console.log(error)
      console.log("We are full")
    }
  }
  try {
    for (let index = 0; index < 6; index++) {
      await checkTicket(index,parts[index])
      //await stdlib.wait(1);
    }
  } catch (error) {
    console.warn = () => {};
  }

  console.log("ANDDDDDDDDDDDDDDDDD")

}
console.log('Starting backends...');
await ctcCREATOR.p.CREATOR({
    getParams : () => {
      return {
        price : ticketPrice,
        tickets : 5,
        eventName : "Bors",
        eventSymbol : "BTY",
        url:"https://asdf.com",
        metadata:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        evenTime:10,
        reserved:2
      }
    },
    notify : async (ETOKEN,bl,sp) =>{
      await accCREATOR.tokenAccept(ETOKEN)
      console.log("BALANCE: ", stdlib.bigNumberToNumber(bl))
      console.log("SUPPLY: ", stdlib.bigNumberToNumber(sp))
      
    },
    ready : async (ETOKEN,ct) => {
      await newMember(ETOKEN,ct)
      console.log("DONE: ")
    },
    soldOut : async (TK,ct) => {
      console.log("SOLD OUT")
      await ticket(TK,ct)
    }
});
done = true
console.log('Goodbye, CREATOR and Bob!');
