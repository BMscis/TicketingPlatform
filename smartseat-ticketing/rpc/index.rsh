'reach 0.1';

const ticket = Object({
  price: UInt,
  tickets: UInt,
  eventName: Bytes(32),
  eventSymbol: Bytes(8),
  url:Bytes(96),
  metadata:Bytes(32),
  evenTime:UInt,
  reserved:UInt
})
const tokenStruct = Struct([
["name",    Bytes(32)],
["symbol",  Bytes(8)],
["url",     Bytes(96)],
["metadata",Bytes(32)],
["supply",  UInt],
["decimals", UInt]
])
const tokenObject = Object({
  name:    Bytes(32),
  symbol:  Bytes(8),
  url:     Bytes(96),
  metadata:Bytes(32),
  supply:  UInt,
  decimals:UInt,
})
const FPay = (algo,jsr,tokn) => [algo,[jsr, tokn]];
const checkParams = (x,y,z) => {
  check(x >= 2 * 1, "Tickets have to be more than none")
  check(z >= 1, "You must reserve atleast one ticket")
  check(x > z, "Reserved can't be more than ticket nums")
  check(y > 0, "Price has to be more than nil")
}
export const main = Reach.App(() => {
  setOptions({untrustworthyMaps: true,connectors:[ALGO]});
  const CREATOR = Participant('CREATOR', {
    getParams : Fun([], ticket),
    notify    : Fun([Contract,Token,UInt,UInt], Null),
    soldOut   : Fun([Token,Contract],Null),
    ready     : Fun([],Null),
    end       : Fun([],Null)
  });
  const ATTENDEE = API('ATTENDEE', {
    buy : Fun([UInt], Tuple(Bool,UInt,UInt,UInt,UInt)),
    redeem : Fun([Token], Tuple(Bool,UInt,UInt,UInt,UInt))
  });
  init();
  CREATOR.only(()=>{
    const {price, tickets, eventName, eventSymbol,url,metadata,evenTime,reserved} = declassify(interact.getParams());
    checkParams(tickets,price,reserved)
  })
  CREATOR.publish(price, tickets, eventName, eventSymbol, url, metadata, evenTime,reserved);
  checkParams(tickets,price,reserved)
  const amount = 1
  const dec = 0
  require(amount == 1,"Sorry amount must be one")
  require(dec == 0, "Decimals must be zero")
  const tkn = tokenStruct.fromTuple([eventName, eventSymbol, url, metadata, tickets, dec])
  const ETOKEN = new Token(tokenStruct.toObject(tkn))
  require(ETOKEN.supply() == tickets,"Supply must be equal to tickets")
  require(balance(ETOKEN) == tickets,"Balance must be equal to tickets")
  require(ETOKEN.supply() == balance(ETOKEN),"Balance must be equal to supply")
  require(balance() == 0,"Algo balance must be zero")
  commit();
  const ctx = getContract()
  CREATOR.interact.notify(ctx,ETOKEN,ETOKEN.supply(),balance(ETOKEN))
  CREATOR.publish();
  const eventDate = lastConsensusTime() + evenTime;
  const eventEndDate = eventDate + evenTime
  const ATTENDEES = new Set()
  //transfer(reserved,ETOKEN).to(CREATOR)
  CREATOR.interact.ready()

  const [sold] = parallelReduce([ 0 ])
.invariant(
  balance(ETOKEN) <= ETOKEN.supply() &&
  balance() == (price * sold))
.while(balance(ETOKEN) > 0)
.define(() => {
  const isMember = (t) => ATTENDEES.member(t)
  const doCheck = (t,b) => {
    check(b == price, "You have to increase purchasing price")
    check(balance(ETOKEN) > 0,"Insufficient token balance")
  }
})
.api(ATTENDEE.buy,
  ((by)=> doCheck(this,by)),
  ((by)=> [by,[0,ETOKEN]]),
  ((by,rt)=>{
    doCheck(this,by)
    if(!isMember(this)){ATTENDEES.insert(this)}
    transfer(amount, ETOKEN).to(this)
    rt([true,balance(ETOKEN),ETOKEN.supply(),sold + 1,balance()])
      return [sold + 1]
}))
// .timeout(absoluteTime(eventDate), () => {
//   CREATOR.publish()
//   return [sold]; });

CREATOR.interact.soldOut(ETOKEN,getContract());
const [redeemed] = parallelReduce([ sold ])
.invariant(
  //balance(ETOKEN) <= ETOKEN.supply() &&
  balance() == ((price * sold)))
.while(ETOKEN.supply() > 0)
.define(() => {
  const checkToken = (y,t) => {
    check(isMember(y),"You're not a member")
    check(t == ETOKEN, "Tokens are not the same")
  }
})
.api(ATTENDEE.redeem,
  ((tn)=> checkToken(this,tn)),
  ((tn)=>[0,[1,ETOKEN]]),
  ((tn,rt)=>{
    checkToken(this,tn)
    ETOKEN.burn(amount)
    rt([true,balance(ETOKEN),ETOKEN.supply(),redeemed - 1,balance()])
    return [redeemed - 1]
}))
// .timeout(absoluteTime(eventEndDate), () => {
//   CREATOR.publish()
//   return [redeemed]; });
 
  transfer(balance()).to(CREATOR)
  //transfer(amount,ETOKEN).to(CREATOR)
  //assert(ETOKEN.supply() == tickets - amount);
  ETOKEN.burn();
  if(!ETOKEN.destroyed()){
    ETOKEN.destroy();
  }
  CREATOR.interact.end()
  commit();
  exit();
});
