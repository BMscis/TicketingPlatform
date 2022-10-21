import Link from 'next/link'
export default function ToolBar(){
    return (
        <>
        <header className="transparent clone">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="de-flex sm-pt10">
                        <div className="de-flex-col">
                            <div className="de-flex-col">
                                {/* <!-- logo begin --> */}
                                <div id="logo">
                                    <a href="/Home">
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
                                    <Link href="/Home">Home</Link>
                                    
                                </li>
                                <li>
                                    <a href="#">Pages Done<span></span></a>
                                    <ul>
                                        <li><Link href="view-tickets.html">View Tickets</Link></li>
                                        <li><Link href="ticket-details.html">Ticket Details</Link></li>
                                        <li><Link href="/CreatorClass">List Ticket</Link></li>
                                        <li><Link href="place-bid.html">Place Bid</Link></li>
                                        <li><Link href="profile-page.html">Profile</Link></li>
                                        <li><Link href="item-price.html">Item Price</Link></li>
                                        <li><Link href="statistics.html">Statistics</Link></li>
                                        <li><Link href="ticket-section.html">Ticket Section</Link></li>
                                        <li><Link href="/Wallet">Wallet</Link></li>
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