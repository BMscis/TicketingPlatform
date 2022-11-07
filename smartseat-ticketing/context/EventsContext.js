import React, { useContext, useState } from "react";
export const EventsContext = React.createContext()

export function GetEvents(){
    return useContext(EventsContext)
}
const uE = [
    {EVENTLOCATION:"Morrison, CO",EVENTIMAGE:"images/upcoming/sub.jpeg",EVENTNAME:"Subtronics",active:false,cloned:false},
    {EVENTLOCATION:"Columbus, OH",EVENTIMAGE:"images/upcoming/Sullivan.jpeg",EVENTNAME:"Sullivan King",active:true,cloned:false},
    {EVENTLOCATION:"Grand Rapids, MI",EVENTIMAGE:"images/upcoming/Bass.jpeg",EVENTNAME:"Bass Country",active:true,cloned:false},
    {EVENTLOCATION:"Wichita, KS",EVENTIMAGE:"images/upcoming/Kai.jpeg",EVENTNAME:"Kai Wachi",active:true,cloned:false},
    {EVENTLOCATION:"Chicago, IL",EVENTIMAGE:"images/upcoming/Said.jpeg",EVENTNAME:"Said the Sky",active:true,cloned:false}
]

export default function EventsContextProvider({children}){
    //console.log("EventsContextProvider")
    const [upcomingEvent, setCurrentEvent] = useState({events : uE})
    const createEvent = async (evn) => {
        //console.log("UPCOMING EVENTS: ", upcomingEvent.events)
        const newEvn = upcomingEvent.events.push(evn)
        setCurrentEvent(newEvn)
        //console.log("UPC: ", upcomingEvent)
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