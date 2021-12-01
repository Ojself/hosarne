import React, { useState } from "react";
import { formatDate } from "../utils/helpers";

const EventPreview = ({
  mainImage,
  title,
  theme,
  mainEvent,
  facebookUrl,
  timeEnd,
  timeStart,
  handleEventHover,
  somethingIsHovering,
}) => {
  const [hovering, setHovering] = useState(false);
  const date = `${formatDate(timeStart)} ${
    timeEnd ? `- ${formatDate(timeEnd)}` : ""
  }`;
  const handleHovering = (bool, theme) => {
    handleEventHover(bool, theme);
    setHovering(bool);
  };
  const opacity =
    !hovering && somethingIsHovering ? "opacity-10" : "opacity-100";
  const width = mainEvent ? "w-2/5" : "w-1/4";

  return (
    <article
      onMouseEnter={() => handleHovering(true, theme)}
      onMouseLeave={() => handleHovering(false)}
      className={`transition duration-1000 ease-in-out ${opacity} ${width} mx-4 mb-24 text-black `}
    >
      <a
        className='flex flex-col font-book'
        target='_blank'
        rel='noopener noreferrer'
        href={facebookUrl}
      >
        <h1 className='text-3xl'>{title}</h1>
        <h5>{date}</h5>
        <div className=''>
          <img
            className='object-cover'
            src={mainImage.asset.url}
            alt={mainImage.alt}
          />
        </div>
      </a>
    </article>
  );
};

export default EventPreview;
