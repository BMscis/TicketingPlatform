import React, { useContext, useEffect, useState } from "react";
export const EventsContext = React.createContext()

export function GetEvents(){
    return useContext(EventsContext)
}
const uE = [
    {location:"Morrison, CO",image:"images/upcoming/sub.jpeg",title:"Subtronics",active:false,cloned:false},
    {location:"Columbus, OH",image:"images/upcoming/Sullivan.jpeg",title:"Sullivan King",active:true,cloned:false},
    {location:"Grand Rapids, MI",image:"images/upcoming/Bass.jpeg",title:"Bass Country",active:true,cloned:false},
    {location:"Wichita, KS",image:"images/upcoming/Kai.jpeg",title:"Kai Wachi",active:true,cloned:false},
    {location:"Chicago, IL",image:"images/upcoming/Said.jpeg",title:"Said the Sky",active:true,cloned:false}
]

export default function EventsContextProvider({children}){
    console.log("EventsContextProvider")
    const [upcomingEvent, setCurrentEvent] = useState({events : uE})
    const createEvent = async (evn) => {
        console.log("UPCOMING EVENTS: ", upcomingEvent.events)
        const newEvn = upcomingEvent.events.push(evn)
        setCurrentEvent(newEvn)
        console.log("UPC: ", upcomingEvent)
    }
      const value = {
        upcomingEvent,
        createEvent
      }
      return (
        <>
        <EventsContext.Provider value={value}>
            {children}
        </EventsContext.Provider>
        </>
      )
}