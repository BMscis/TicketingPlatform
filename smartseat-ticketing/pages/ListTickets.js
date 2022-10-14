import { useRef } from "react"
import Main from "../components/Main"
export default function ListTickets ({props}){
    const creator = props
    const nm = useRef()
    const tn = useRef()
    const ts = useRef()
    const ed = useRef()
    const rs = useRef()
    const lc = useRef()
    const tp = useRef()
    console.log("Login: ", creator)

    const createEvent = async ()=>{
        await creator.deploy(
            nm.current.value,
            tn.current.value,
            ts.current.value,
            ed.current.value,
            rs.current.value,
            lc.current.value,
            tp.current.value
            )
    }
    return(
        <>
        <Main>
        <section id="subheader" className="text-light" style={{backgroundColor: "black", backgroundSize: "cover"}}>
                <div className="center-y relative text-center" style={{backgroundSize: "cover"}}>
                    <div className="container" style={{backgroundSize: "cover"}}>
                        <div className="row" style={{backgroundSize: "cover"}}>

                            <div className="col-md-12 text-center" style={{backgroundSize: "cover"}}>
                                <h1>List Tickets</h1>
                            </div>
                            <div className="clearfix" style={{backgroundSize: "cover"}}></div>
                        </div>
                    </div>
                </div>
            </section>
        <section style={{backgroundColor: "black", backgroundSize: "cover"}}>
            <div className="beforContainer" style={{backgroundSize: "cover"}}>
                <div className="bcdiv" style={{backgroundSize: "cover"}}>
                    <p>Name of event:</p>
                    <input type="text" ref={nm} name="username" id="username" className="form-control" placeholder="Triple Rainbow"/>
                </div>
                <div className="bcdiv" style={{backgroundSize: "cover"}}>
                    <p>How many tickets?</p>
                    <input type="text" ref={tn} name="username" id="username" className="form-control" placeholder="1500"/>
                </div>
                <div className="bcdiv" style={{backgroundSize: "cover"}}>
                    <p>Ticket symbol?</p>
                    <input type="text" ref={ts} name="username" id="username" className="form-control" placeholder="ABC"/>
                </div>
                <div className="bcdiv" style={{backgroundSize: "cover"}}>
                    <p>Event Date?</p>
                    <input type="date" ref={ed} name="username" id="username" className="form-control" />
                </div>
                <div className="bcdiv" style={{backgroundSize: "cover"}}>
                    <p>Reserved Tickets</p>
                    <input type="number" ref={rs} name="username" id="username" className="form-control" placeholder="0"/>
                </div>
                <div className="bcdiv" style={{backgroundSize: "cover"}}>
                    <p>Location</p>
                    <input type="text" ref={lc} name="username" id="username" className="form-control" placeholder="CA, California"/>
                </div>
                <div className="bcdiv" style={{backgroundSize: "cover"}}>
                    <p>Ticket Price</p>
                    <input type="number" ref={tp} name="username" id="username" className="form-control" placeholder="ALGO"/>
                </div>
                <div className="bcdiv" style={{backgroundSize: "cover"}}>
                    <p>Different sectioned tickets?</p>
                    <button className="btn-main" id="btn">yes</button>
                    <button className="btn-main" id="btn">no</button>
                </div>
                <div className="bcdiv" style={{backgroundSize: "cover"}}>
                    <p>PROCEED</p>
                    <button onClick={()=>{createEvent()}} className="btn-main" id="btn">CREATE EVENT</button>
                </div>
            </div>
            <div className="container" style={{backgroundSize: "cover"}}>
                <div className="row" style={{backgroundSize: "cover"}}>
                    <div className="col text-center" style={{backgroundSize: "cover"}}>
                    </div>
                </div>
                <div className="row sequence" style={{backgroundSize: "cover"}}>
                    <div className="box" style={{backgroundSize: "cover"}}>
                        <div className="pricing-s1 mb30" style={{backgroundSize: "cover"}}>
                            <div className="top" style={{backgroundSize: "cover"}}>
                                <h3>Ticket Pricing</h3>
                                <table>
                                    <tbody><tr>
                                        <td>Balcony</td>
                                        <td>$27.00</td>
                                    </tr>
                                    <tr>
                                        <td>GA</td>
                                        <td>$40.00</td>
                                    </tr>
                                    <tr>
                                        <td>GA Lower Level</td>
                                        <td>$50.00</td>
                                    </tr>
                                    <tr>
                                        <td>VIP</td>
                                        <td>$110.00</td>
                                    </tr>
                                </tbody></table>
                            </div>
                        </div>
                    </div>
                    <div className="box" style={{backgroundSize: "cover"}}>
                        <div className="pricing-s1 mb30" style={{backgroundSize: "cover"}}>
                            <div className="top" style={{backgroundSize: "cover"}}>
                                <h3>Ticket Sale Revenue Distribution</h3>
                                <table>
                                    <tbody><tr>
                                        <th>Entity</th>
                                        <th>Revenue</th>
                                    </tr>
                                    <tr>
                                        <td>Griz</td>
                                        <td>75%</td>
                                    </tr>
                                    <tr>
                                        <td>Clozee</td>
                                        <td>10%</td>
                                    </tr>
                                    <tr>
                                        <td>Tape B</td>
                                        <td>5%</td>
                                    </tr>
                                    <tr>
                                        <td>Management 1</td>
                                        <td>5%</td>
                                    </tr>
                                    <tr>
                                        <td>Management 2</td>
                                        <td>5%</td>
                                    </tr>
                                </tbody></table>
                            </div>
                        </div>
                    </div>
                    <div className="box" style={{backgroundSize: "cover"}}>
                        <div className="pricing-s1 mb30" style={{backgroundSize: "cover"}}>
                            <div className="top" style={{backgroundSize: "cover"}}>
                                <h3>Max Resell Ticket Pricing</h3>
                                <table>
                                    <tbody><tr>
                                        <td>Balcony</td>
                                        <td>$40.00</td>
                                    </tr>
                                    <tr>
                                        <td>GA</td>
                                        <td>$60.00</td>
                                    </tr>
                                    <tr>
                                        <td>GA Lower Level</td>
                                        <td>$80.00</td>
                                    </tr>
                                    <tr>
                                        <td>VIP</td>
                                        <td>$150.00</td>
                                    </tr>
                                </tbody></table>
                            </div>

                        </div>

                    </div>
                    <div className="box" style={{backgroundSize: "cover"}}>
                        <div className="pricing-s1 mb30" style={{backgroundSize: "cover"}}>
                            <div className="top" style={{backgroundSize: "cover"}}>
                                <h3>Choose Your Royality Percentage</h3>
                                <table>
                                    <tbody><tr>
                                        <th>Entity</th>
                                        <th>Revenue</th>
                                    </tr>
                                    <tr>
                                        <td>Griz</td>
                                        <td>50%</td>
                                    </tr>
                                    <tr>
                                        <td>Reseller</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>Clozee</td>
                                        <td>5%</td>
                                    </tr>
                                    <tr>
                                        <td>Tape B</td>
                                        <td>5%</td>
                                    </tr>
                                    <tr>
                                        <td>Management 1</td>
                                        <td>5%</td>
                                    </tr>
                                    <tr>
                                        <td>Management 2</td>
                                        <td>5%</td>
                                    </tr>
                                </tbody></table>
                            </div>

                        </div>

                    </div>
                    <div className="box" style={{backgroundSize: "cover"}}>
                        <div className="pricing-s1 mb30" style={{backgroundSize: "cover"}}>
                            <div className="top" style={{backgroundSize: "cover"}}>
                                <h3>Upload Event Promo Image</h3>
                                <br/>
                                <button className="btn-main" type="submit" value="Upload Image" name="submit" style={{backgroundColor: "#18D8B3"}}>Upload Image</button>
                            </div>
                        </div>
                    </div>
                    <button className="btn-main" onClick={()=>{creator.deploy()}} style={{width:"70%", margin: "auto", backgroundColor: "#18D8B3"}}>List Tickets</button>
                </div>
            </div>
        </section>
        </Main>
        </>
    )
}