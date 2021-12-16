import React, { useEffect, useState } from "react";
import { changeLayOutColors, formatDates } from "../utils/helpers";
import BlockContent from "@sanity/block-content-to-react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { AiOutlineArrowDown } from "react-icons/ai";
const Event = ({ location }) => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const calculateOpacity = (offset) => {
    const limit = -150;

    return (offset - limit + 100) / 400;
  };

  useScrollPosition(({ prevPos, currPos }) => {
    setScrollOpacity(calculateOpacity(currPos.y));
  });

  const backgroundColor = location?.state?.event?.theme || "#fff";
  useEffect(() => {
    changeLayOutColors(backgroundColor, true);
  }, [backgroundColor]);

  if (!location?.state?.event) return null;

  const positionOfBody =
    document.querySelector("#event-description")?.offsetTop - 500 || 850;

  const { event } = location.state;
  const shouldRenderBody = event.body && event.body.length;
  return (
    <>
      <button
        style={{ opacity: scrollOpacity }}
        onClick={() =>
          window.scrollTo({ top: positionOfBody, behavior: "smooth" })
        }
        className='animate-bounce fixed bottom-6 left-6 text-4xl font-thin outline-none z-10'
      >
        <AiOutlineArrowDown />
      </button>
      <main
        style={{ backgroundColor }}
        id='event-home'
        className='transition duration-1000 ease-in-out px-44 relative mb-64'
      >
        <section
          style={{ opacity: scrollOpacity }}
          className='h-96 sticky top-64'
        >
          <h5 className='text-3xl text-center font-thin'>
            {formatDates(event.timeStart, event.timeEnd)}{" "}
          </h5>
          <h1 className='text-8xl text-center font-extralight'>
            {event.title}
          </h1>
        </section>
        <img
          className='object-cover w-full h-auto'
          src={event.mainImage.asset.url}
          alt={event.mainImage.alt}
        />

        <section id='event-description'>
          {shouldRenderBody && (
            <BlockContent
              className='font-extralight'
              blocks={event.body}
              renderContainerOnSingleChild={true}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Event;
