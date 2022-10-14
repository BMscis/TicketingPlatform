import LargeCard from '../components/largeCard'
import CarouselCard from '../components/carouselCard'
import EventsCard from '../components/eventsCard'
import Main from '../components/Main'
import { ReachContextHook } from '../context/CommonContext'
import PresentationButton from '../components/presentationButton'
import { windowHook } from '../context/Dimensions'
import { dimensionHook } from '../context/SetDimension'

const genres = [
  {source:'images/edmnew.jpg',title:'EDM'},
  {source:"images/rapupdate.jpg",title:'RAP'},
  {source:'images/countryupdate.jpg',title:'COUNTRY'},
]
const popularArtists = [
    {source:"images/rezznew.jpg",
    image:"images/popularArtists/rezz.jpeg",title:"Rezz",
    active:false,cloned:true},
    {source:"images/exesionnew.jpg",
    image:"images/popularArtists/x.jpeg",title:"Excision",
    active:false,cloned:true},
    {source:"images/griznew.jpg",
    image:"images/popularArtists/grz.jpeg",title:"GRiZ",
    active:false,cloned:false},
    {source:"images/illiumnew.jpg",
    image:"images/popularArtists/illium.jpeg",title:"Illenium",
    active:false,cloned:false},
    {source:"images/fmulanew.jpg",image:"images/fmulaprofilenew.jpg",title:"Alison Wonderland",
    active:false,cloned:false},
    {source:"images/subtronicupdate.jpg",
    image:"images/popularArtists/subtrpnics.jpeg",title:"Subtronics",
    active:true,cloned:false},
    {source:"images/rezznew.jpg",
    image:"images/popularArtists/rezz.jpeg",title:"Rezz",
    active:true,cloned:false},
    {source:"images/exesionnew.jpg",
    image:"images/popularArtists/x.jpeg",title:"Excision",
    active:true,cloned:false},
    {source:"images/griznew.jpg",
    image:"images/popularArtists/grz.jpeg",title:"GRiZ",
    active:true,cloned:true},
    {source:"images/illiumnew.jpg",
    image:"images/popularArtists/illium.jpeg",title:"Illenium",
    active:false,cloned:true},
    {source:"images/fmulanew.jpg",image:"images/fmulaprofilenew.jpg",title:"Alison Wonderland",
    active:false,cloned:true},
    {source:"images/subtronicupdate.jpg",
    image:"images/popularArtists/subtrpnics.jpeg",title:"Subtronics",
    active:true,cloned:true},
]

export default function Home() {
  console.log("HOME")
  const {hasUser, SetUser,upcomingEvent} = ReachContextHook()
  const {width,height} = windowHook()
  const {getDim,trans} = dimensionHook()
  console.log("TRANSLATE: ", trans)
  console.log("HAS USER: ",hasUser)
  console.log("UC: ",upcomingEvent)
  console.log("W: ",width)
  console.log("H: ",height)

  return (
<>
{console.log("Render")}
<Main >
<section id="section-hero" aria-label="section" className="no-top no-bottom vh-100" style={{backgroundColor: "black"}}>
    <div className="v-center">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="spacer-single"></div>
                    <h6  className="wow fadeInUp" data-wow-delay=".5s"><span className="text-uppercase id-color-2" style={{color: "#18D8B3"}}>Version 1.0</span></h6>
                    <div className="spacer-10"></div>
                    <h1 className="wow fadeInUp" data-wow-delay=".75s">Be the master of your own tickets.</h1>
                    <p className="wow fadeInUp lead" data-wow-delay="1s">
                        SmartSeat aims to satisfy ticket buyers, artists, and venues by embodying leading-edge blockchain technology. SmartSeat offers safeguarded ticketing for live events protected by blockchain technology, which in turn eradicates scalpers and increases revenue for artists, assuring fair prices for attendees.</p>
                    <div className="spacer-10"></div>
                    <a style={{backgroundColor: "#18D8B3"}} href="02_dark-explore.html" className="btn-main wow fadeInUp lead" data-wow-delay="1.25s">Explore</a>
                    <div className="mb-sm-30"></div>
                </div>
                <div className="col-md-6 xs-hide">
                    <img src="images/misc/nft.png" className="lazy img-fluid wow fadeIn" data-wow-delay="1.25s" alt=""/>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="section-intro" className="no-top no-bottom" style={{backgroundColor: "black"}}>
    <div className="container">
        <div className="row">
        {genres.map(function(genre,i){
            return <LargeCard props={genre} key={i}></LargeCard>
        })}
        </div>
    </div>
</section>            
<section id="section-collections" className="no-bottom" style={{backgroundColor: "black"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="text-center">
                    <h2>Popular Artists</h2>
                    <div className="small-border bg-color-2"></div>
                </div>
            </div>
            {/* <div id="collection-carousel" className="owl-carousel wow fadeIn"> */}
    <div id="collection-carousel" className="owl-carousel wow fadeIn owl-loaded owl-drag animated" style={{backgroundSize: "cover", visibility: "visible", animationName: "fadeIn"}}>
    <div className="owl-stage-outer">
    <div className="owl-stage" style={{transform:"translate3d(-1996px, 0px, 0px)", transition:" all 0.25s ease 0s",width:"3994px"}}>
    {popularArtists.map(function(pop,i){
        return <CarouselCard props={pop} key={i}></CarouselCard>
    })}
    </div></div><div className="owl-nav">
        <PresentationButton direction="left" width={width} height={height} getDim={getDim}></PresentationButton>
        <PresentationButton direction="right" width={width} height={height} getDim={getDim}></PresentationButton>
        </div><div className="owl-dots disabled"></div></div>
            </div>
        </div>
</section>
<section id="section-items" className="no-bottom" style={{backgroundColor: "black"}}>
<div className="container" style={{backgroundSize: "cover"}}>
    <div className="row" style={{backgroundSize: "cover"}}>
        <div className="col-lg-12" style={{backgroundSize: "cover"}}>
            <div className="text-center" style={{backgroundSize: "cover"}}>
                <h2>Upcoming Concerts</h2>
                <div className="small-border bg-color-2" style={{backgroundSize: "cover"}}></div>
            </div>
        </div>
        <div id="items-carousel" className="owl-carousel wow fadeIn owl-loaded owl-drag animated" style={{backgroundSize: "cover", visibility: "visible", animationName: "fadeIn"}}>

                {/* <!-- nft item begin -->
                    
                    <!-- nft item begin -->
                                    
                <!-- nft item begin -->
                        
                <!-- nft item begin --> */}
                
            <div className="owl-stage-outer">
                <div className="owl-stage" style={{transform: trans, width:" 1427px"}}>
                {upcomingEvent.events.map(function(pop,i){
                return <EventsCard props={pop} key={i}></EventsCard>
                })}
                </div></div><div className="owl-nav">
                <PresentationButton direction="left" width={width} height={height} getDim={getDim}  eventNum={upcomingEvent.events.length}>

                </PresentationButton>
                <PresentationButton direction="right" width={width} height={height} getDim={getDim} eventNum={upcomingEvent.events.length}>

                </PresentationButton>
                </div><div className="owl-dots disabled"></div></div>
        </div>
    </div>
</section>
</Main>  

</>
  )
}
