import LargeEventsCard from "../../components/LargeEventsCard";

export default function Ticket({parent}){
    return (
    <>
    <section aria-label="section" className="mt90 sm-mt-0" style={{backgroundColor: "black", backgroundSize: "cover"}}>
        <div className="container" style={{backgroundSize: "cover"}}>
            <div className="row" style={{backgroundSize: "cover"}}>
                <div className="col-md-6 text-center" style={{backgroundSize: "cover"}}>
                    <img src={parent.state.IMAGE} className="img-fluid img-rounded mb-sm-30" alt=""/>
                </div>
                <LargeEventsCard parent={parent}></LargeEventsCard>
            </div>
        </div>
    </section>
    </>
    )
}