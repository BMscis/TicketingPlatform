import Main from '../components/Main'
import WalletCard from '../components/walletCard'
import Link from 'next/link'
import { ReachContextHook } from '../context/CommonContext'

export default function Wallet() {
  console.log("WALLET")
  const {hasUser,login} = ReachContextHook()
  const wallets = [
    {image:"images/wallet/9.png", title:"MyAlgo",span:"Active",active:true,login,
    description:"Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide."},
    {image:"images/wallet/4.png", title:"WalletConnect",span:"For Mobile",active:true,login,
    description:"Open source protocol for connecting decentralised applications to mobile wallets."},
    {image:"images/wallet/1.png", title:"Metamask",span:"Most Popular",active:false,login,
    description:"Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide."},
    {image:"images/wallet/2.png", title:"Bitski",span:"",active:false,login,
    description:"Let users access your Ethereum app from anywhere. No more browser extensions."},
    {image:"images/wallet/5.png", title:"Coinbase Wallet",span:"",active:false,login,
    description:"The easiest and most secure crypto wallet. ... No Coinbase account required."},
    {image:"images/wallet/6.png", title:"Arkane",span:"",active:false,login,
    description:"Make it easy to create blockchain applications with secure wallets solutions."},
    {image:"images/wallet/7.png", title:"Authereum",span:"",active:false,login,
    description:"Your wallet where you want it. Log into your favorite dapps with Authereum."},
    {image:"images/wallet/8.png", title:"Torus",span:"Most Simple",active:false,login,
    description:"Open source protocol for connecting decentralised applications to mobile wallets."},
]
  return (
<>
<Main>
{/* <!-- section begin --> */}
<section id="subheader" className="text-light" style={{backgroundColor: "black"}}>
        <div className="center-y relative text-center">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-12 text-center">
                        <h1>{hasUser ? "Wallet Connected" : "Connect Wallet"}</h1>
                        <p style={{color:"#444"}}>Your wallet security stores your digital tickets. Connect to one of our <br/> wallet provider or create a new one.</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
</section>
{/* <!-- section close -->             */}

{/* <!-- section begin --> */}
<section aria-label="section" style={{backgroundColor: "black",marginTop:"-104px"}}>
    <div className="container">
        <div className="row">
        {wallets.map(function(wallet,i){
            return <WalletCard props={wallet} key={i}></WalletCard>
        })}                                 
        </div>
    </div>
</section>
</Main>  
{/* <script src="./js/plugins.js"></script> */}
</>
  )
}