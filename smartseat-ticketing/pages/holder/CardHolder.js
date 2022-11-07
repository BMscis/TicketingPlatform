import { useEffect } from "react"
import { ReachContextHook } from "../../context/CommonContext"
import { dimensionHook } from "../../context/SetDimension"
import EventsCard from "../../components/eventsCard"
import BuyerEvent from "../Buyer/BuyerEvent"
import PresentationButton from "../../components/presentationButton"
export default function CardHolder({parent}) {
    const { trans } = dimensionHook()
    const { events } = parent.props.parent.context.upcomingEvent
    console.log("CARD HOLDERS")
    useEffect(() => {
        console.log("CARD HOLDERS")
    }, [])
    return (
        <>
            <section id="section-items" className="no-bottom" style={{ backgroundColor: "black" }}>
                <div className="container" style={{ backgroundSize: "cover" }}>
                    <div className="row" style={{ backgroundSize: "cover" }}>
                        <div className="col-lg-12" style={{ backgroundSize: "cover" }}>
                            <div className="text-center" style={{ backgroundSize: "cover" }}>
                                <h2>Upcoming Concerts</h2>
                                <div className="small-border bg-color-2" style={{ backgroundSize: "cover" }}></div>
                            </div>
                        </div>
                        <div id="items-carousel" className="owl-carousel wow fadeIn owl-loaded owl-drag animated" style={{ backgroundSize: "cover", visibility: "visible", animationName: "fadeIn" }}>
                            <div className="owl-stage-outer">
                                <div className="owl-stage" style={{ transform: trans, width: " 1427px" }}>
                                    {events.map(function (pop, i) {
                                        return <BuyerEvent parent={parent}
                                            props={pop} id={i} key={i}></BuyerEvent>
                                    })}
                                </div>
                            </div>
                            <div className="owl-nav">
                                <PresentationButton direction="left">
                                </PresentationButton>
                                <PresentationButton direction="right">
                                </PresentationButton>
                            </div>
                            <div className="owl-dots disabled">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}