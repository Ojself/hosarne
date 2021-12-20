import React, { useState } from "react";
import { formatDates } from "../utils/helpers";
import { Link } from "react-router-dom";

const EventPreview = ({ somethingIsHovering, handleEventHover, event }) => {
  const { mainImage, title, theme, mainEvent, timeEnd, timeStart, slug } =
    event;
  const [hovering, setHovering] = useState(false);

  const handleHovering = (bool, theme) => {
    handleEventHover(bool, theme);
    setHovering(bool);
  };
  const opacity =
    !hovering && somethingIsHovering ? "opacity-10" : "opacity-100";
  const width = mainEvent ? "w-full lg:w-2/5" : "w-full lg:w-1/4";

  return (
    <article
      onMouseEnter={() => handleHovering(true, theme)}
      onMouseLeave={() => handleHovering(false)}
      className={`transition duration-1000 ease-in-out ${opacity} ${width} mx-6 mb-24 text-black `}
    >
      <Link
        className='flex flex-col font-book'
        to={{
          pathname: `/program/${slug.current}`,
          state: { event },
        }}
      >
        <h1 className='text-xl lg:text-3xl'>{title}</h1>
        <h5 className='text-xs lg:text-base'>
          {formatDates(timeStart, timeEnd)}
        </h5>
        <div className=''>
          <img
            className='object-cover'
            src={mainImage.asset.url}
            alt={mainImage.alt}
          />
        </div>
      </Link>
    </article>
  );
};

export default EventPreview;
