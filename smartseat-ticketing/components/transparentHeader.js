export default function TransparentHeader(){
    return (
        <>
            <header className="transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    {/* <!-- logo begin --> */}
                                    <div id="logo">
                                        <a href="/">
                                            <img alt="" src="images/logo.webp" />
                                        </a>
                                    </div>
                                    {/* <!-- logo close --> */}
                                </div>
                                <div className="de-flex-col">
                                    <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                {/* <!-- mainmenu begin --> */}
                                <ul id="mainmenu">
                                    <li>
                                        <a href="/">Home<span></span></a>
                                        
                                    </li>
                                    <li>
                                        <a href="#">Pages Done<span></span></a>
                                        <ul>
                                            <li><a href="view-tickets.html">View Tickets</a></li>
                                            <li><a href="ticket-details.html">Ticket Details</a></li>
                                            <li><a href="list-ticket.html">List Ticket</a></li>
                                            <li><a href="place-bid.html">Place Bid</a></li>
                                            <li><a href="profile-page.html">Profile</a></li>
                                            <li><a href="item-price.html">Item Price</a></li>
                                            <li><a href="statistics.html">Statistics</a></li>
                                            <li><a href="ticket-section.html">Ticket Section</a> </li>
                                            <li><a href="/Wallet">Wallet</a></li>
                                            <li><Link href={{
                                            pathname:"/login",
                                            query:{signup:"SU"}
                                        }}>Sign Up</Link></li>
                                        <li><Link href={{
                                            pathname:"/login",
                                            query:{signup:"LI"}
                                        }}>Login</Link></li>
                                           
                                        </ul>
                                    </li>
                                </ul>
                                <div className="menu_side_area">
                                    <a href="02_dark-wallet.html" className="btn-main btn-wallet" style={{backgroundColor: "#18D8B3"}}><i className="icon_wallet_alt"></i><span>Profile</span></a>
                                    <span id="menu-btn"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}