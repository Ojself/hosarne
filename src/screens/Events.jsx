import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import EventPreview from "../components/EventPreview";
import { changeLayOutColors } from "../utils/helpers";

const Program = () => {
  const [events, setEvents] = useState([]);
  const [somethingIsHovering, setSomethingIsHovering] = useState(false);
  const [theme, setTheme] = useState("#fff");

  useEffect(() => {
    changeLayOutColors(theme, false);
    const fetchSanityData = async () => {
      if (events.length) return;
      const data =
        await sanityClient.fetch(`*[_type == "event"] | order(timeStart asc){
                       title,
                       timeStart,
                       timeEnd,
                       "theme": theme->hex,
                       mainEvent,
                       facebookUrl,
                       body,
                       slug,
                       mainImage{
                           asset->{
                               _id,
                               order,
                               url
                           },
                           alt
                       }
                   }`);
      const yesterday = new Date(Date.now() - 1000 * 60 * 60 * 24);
      setEvents(data.filter((event) => new Date(event.timeStart) >= yesterday));
    };
    fetchSanityData();
  }, [theme, events.length, somethingIsHovering]);
  const handleEventHover = (bool, theme = "") => {
    setSomethingIsHovering(bool);
    setTheme(theme);
  };
  return (
    <main id='events-home' className='text-white h-min-screen'>
      <section className='h-auto flex flex-wrap mt-20 mb-32'>
        {events.map((event) => (
          <EventPreview
            key={event.title}
            handleEventHover={handleEventHover}
            somethingIsHovering={somethingIsHovering}
            event={event}
          />
        ))}
      </section>
    </main>
  );
};

export default Program;
