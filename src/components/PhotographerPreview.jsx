import React, { useState } from "react";
import { Link } from "react-router-dom";
/* import photographer from "../../hosarne/schemas/photographer"; */

const PhotographerPreview = ({ backgroundColor, color, photographer }) => {
  const [hovering, setHovering] = useState(false);

  const { name, title, slug } = photographer;
  const outlineOpacity = hovering ? "opacity-0" : "opacity-100";
  const filledOpacity = hovering ? "opacity-100" : "opacity-0";
  const defaultFontClassName = `text-5xl uppercase transition duration-700 ease-in-out break-words`;
  return (
    <Link
      style={{ backgroundColor, color, height: "32rem" }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className='flex flex-col w-80 my-8 mx-auto transform transition duration-700 ease-in-out hover:scale-105'
      to={`/in-house/${slug.current}`}
    >
      <div className='h-1/2 '>
        <img
          className='h-full object-cover w-full'
          src={`https://picsum.photos/800`}
          alt='lorem picsum'
        />
      </div>
      <div className=' h-1/2 flex items-center justify-center font-photographer-fx'>
        <div className='flex flex-col h-3/4 justify-around'>
          <div>
            <h4 className='uppercase text-center'>{title}</h4>
          </div>
          <div className='relative'>
            <h1
              className={`${defaultFontClassName} ${outlineOpacity} font-photographer`}
            >
              {name}
            </h1>
            <span
              className={`${defaultFontClassName} ${filledOpacity} absolute top-0 w-full`}
            >
              {name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PhotographerPreview;

/* src={photographer.image.asset.url}
          alt={photographer.image.alt} */
