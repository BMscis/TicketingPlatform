import LargeEventsCard from "../components/LargeEventsCard";
import Main from "../components/Main";

export default function EventTicket({buyer,props}){
    console.log("EVENT TICKET: ", props)
    //const buyer = {buyer}
    return (
        <>
        <Main>
        <section aria-label="section" className="mt90 sm-mt-0" style={{backgroundColor: "black", backgroundSize: "cover"}}>
                <div className="container" style={{backgroundSize: "cover"}}>
                    <div className="row" style={{backgroundSize: "cover"}}>
                        <div className="col-md-6 text-center" style={{backgroundSize: "cover"}}>
                            <img src="images/transparent.png" className="img-fluid img-rounded mb-sm-30" alt=""/>
                        </div>
                        <LargeEventsCard buyer={buyer}  props={props}></LargeEventsCard>
                    </div>
                </div>
        </section>
        </Main>
        </>
    )
}