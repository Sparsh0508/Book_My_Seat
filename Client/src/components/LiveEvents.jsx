import React from "react";
import { events } from "../utils/constants";

const LiveEvents = () => { 
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-semibold mb-6">Live Events</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {events.map((event, index) => (
                    <div key={index} className="rounded overflow-hidden cursor-pointer border hover:shadow-lg transition-shadow duration-300">
                        <div className="relative">
                            <img src={event.img} alt={event.title} className="w-full h-[250px] object-cover rounded"/>
                        </div>
                    </div>
                ))

                }
            </div>
            
        </div>
    )
}

export default LiveEvents;